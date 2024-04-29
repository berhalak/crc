import '@berhalak/js';

export class Card {
  name = 'Unknown';
  desc = '';
  links = '';
  id = String.uid();
}

type CardHandler = (card: Card) => Promise<void> | void;

export class Navigation {
  list: Card[] = [];

  showAll(cards: Card[]) {
    this.list = [...cards];
  }

  show(card: Card) {
    this.list.push(card);
  }

  clicked = new Bus<Card>();
  addClicked = new Bus();
}

type Handler<T> = (value: T) => void;

export class Bus<T> {
  private handlers: Handler<T>[] = [];
  public signal(value: T) {
    this.handlers.forEach(x => x(value));
  }

  public on(handler: Handler<T>) {
    this.handlers.push(handler);
  }
}


export class Position {
  constructor(public card?: Card) {
    if (card) {
      this.id = card.id;
    }
  }

  id = '';
  x = 0;
  y = 0;

  toJson() {
    return {
      id: this.id,
      x: this.x,
      y: this.y,
    };
  }

  useCard(card: Card) {
    this.card = card;
    this.id = card.id;
  }

  fromJson(data: any) {
    this.id = data.id;
    this.x = data.x;
    this.y = data.y;
  }
}

export class Board {
  hide(value: Position) {
    this.list.removeBy(x => x.id == value.id);
  }

  show(card: Card) {
    if (this.list.find(x => x.id == card.id)) return;
    const pos = new Position(card);
    this.list.push(pos);
  }

  async save() {
    table('positions', this.list.map(x => x.toJson()));
  }

  pos(id: string, x: number, y: number) {
    const pos = this.list.find(x => x.id == id);
    if (pos) {
      pos.x = x;
      pos.y = y;
    }
  }

  list: Position[] = [];

  async load() {
    this.list = table('positions').map(x => {
      const p = new Position();
      p.fromJson(x);
      return p;
    });
  }
}

function table(name: string, data?: any[]) {
  if (!data) {
    const raw = localStorage.getItem(name) || '[]';
    const rawList = JSON.parse(raw) as any[];
    return rawList;
  } else {
    localStorage.setItem(name, JSON.stringify(data));
    return data;
  }
}

export class CardList {
  add() {
    this.list.push(new Card());
    this.created.signal(this.list.last());
  }

  private list: Card[] = [];

  async load() {
    this.list = table('cards').map(x => {
      const c = new Card();
      Object.assign(c, x);
      return c;
    });
    this.loaded.signal(this.list);
  }

  async save() {
    table('cards', this.list);
  }

  card(id: string) {
    return this.list.find(x => x.id == id);
  }

  created = new Bus<Card>();
  loaded = new Bus<Card[]>();
}

export class Application {
  nav = new Navigation();
  board = new Board();
  cards = new CardList();

  async start() {
    const nav = this.nav;
    const board = this.board;
    const list = this.cards;

    list.loaded.on((cards: Card[]) => {
      nav.showAll(cards);
    });

    nav.clicked.on(card => {
      board.show(card);
    });

    nav.addClicked.on(async () => {
      list.add();
    });

    list.created.on(card => {
      nav.show(card);
    });

    this.nav = nav;
    this.board = board;
    this.cards = list;

    await list.load();
    await board.load();

    board.list.forEach(x => {
      const card = list.card(x.id);
      x.useCard(card);
    });
  }
}
