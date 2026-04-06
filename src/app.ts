import '@berhalak/js';

// --- Storage (Strategy as a function-shaped type, not a class) ---

export type Storage = {
  read: (key: string) => any[];
  write: (key: string, data: any[]) => void;
};

export const localStore: Storage = {
  read: key => JSON.parse(localStorage.getItem(key) || '[]'),
  write: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
};

// --- Bus ---

type Handler<T> = (value: T) => void;

export class Bus<T> {
  private handlers: Handler<T>[] = [];
  public signal(value?: T) {
    this.handlers.forEach(x => x(value as T));
  }

  public on(handler: Handler<T>) {
    this.handlers.push(handler);
  }
}

// --- Card ---

export class Card {
  name = 'Unknown';
  desc = '';
  links = '';
  id = String.uid();
}

// --- Position ---

export class Position {
  constructor(public card?: Card) {
    if (card) {
      this.id = card.id;
    }
  }

  id = '';
  x = 0;
  y = 0;

  useCard(card: Card) {
    this.card = card;
    this.id = card.id;
  }
}

function serializePosition(p: Position) {
  return { id: p.id, x: p.x, y: p.y };
}

function deserializePosition(data: any): Position {
  const p = new Position();
  p.id = data.id;
  p.x = data.x;
  p.y = data.y;
  return p;
}

// --- Navigation ---

export class Navigation {
  list: Card[] = [];

  showAll(cards: Card[]) {
    this.list = [...cards];
  }

  show(card: Card) {
    this.list.push(card);
  }

  cardClicked(card: Card) {
    this.clicked.signal(card);
  }

  requestAdd() {
    this.addClicked.signal();
  }

  clicked = new Bus<Card>();
  addClicked = new Bus<void>();
}

// --- Board ---

export class Board {
  list: Position[] = [];

  constructor(private storage: Storage = localStore) {}

  hide(value: Position) {
    this.list.removeBy(x => x.id == value.id);
  }

  show(card: Card) {
    if (this.list.find(x => x.id == card.id)) return;
    this.list.push(new Position(card));
  }

  updatePosition(id: string, x: number, y: number) {
    const pos = this.list.find(p => p.id == id);
    if (pos) {
      pos.x = x;
      pos.y = y;
    }
  }

  async save() {
    this.storage.write('positions', this.list.map(serializePosition));
  }

  async load() {
    this.list = this.storage.read('positions').map(deserializePosition);
  }
}

// --- CardList ---

export class CardList {
  private list: Card[] = [];

  constructor(private storage: Storage = localStore) {}

  add() {
    this.list.push(new Card());
    this.created.signal(this.list.last());
  }

  card(id: string) {
    return this.list.find(x => x.id == id);
  }

  async load() {
    this.list = this.storage.read('cards').map(x => {
      const c = new Card();
      Object.assign(c, x);
      return c;
    });
    this.loaded.signal(this.list);
  }

  async save() {
    this.storage.write('cards', this.list);
  }

  created = new Bus<Card>();
  loaded = new Bus<Card[]>();
}

// --- Application wiring (free functions, not a -Wirer class) ---

function wireEvents(nav: Navigation, board: Board, cards: CardList) {
  cards.loaded.on(all => nav.showAll(all));
  nav.clicked.on(card => board.show(card));
  nav.addClicked.on(() => cards.add());
  cards.created.on(card => nav.show(card));
}

function linkPositionsToCards(board: Board, cards: CardList) {
  board.list.forEach(p => {
    const card = cards.card(p.id);
    if (card) p.useCard(card);
  });
}

export class Application {
  nav = new Navigation();
  board = new Board();
  cards = new CardList();

  async start() {
    wireEvents(this.nav, this.board, this.cards);
    await this.cards.load();
    await this.board.load();
    linkPositionsToCards(this.board, this.cards);
  }
}
