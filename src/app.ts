import { bus, Bus } from "geso"
import "@berhalak/js";
import { WebApplication, CardComponent, NavComponent, PositionComponent, BoardComponent } from './api';

export class Card {
    render(web: CardComponent) {
        this.write(web);

        web.onEdit(web => {
            this.read(web);
        })
    }

    name = 'Unknown';
    desc = '';
    links = '';
    id = String.uid();

    write(ui: any) {
        ui.name = this.name;
        ui.desc = this.desc;
        ui.links = this.links;
    }

    read(ui: any) {
        this.name = ui.name;
        this.desc = ui.desc;
        this.links = ui.links;

        // us global bus
        bus.signal(this);
    }
}


type CardHandler = (card: Card) => Promise<void> | void;

export class Navigation {
    web: NavComponent;
    render(web: NavComponent) {
        this.web = web;
        web.clear();
        this.list.forEach(x => web.addCard(x.name, x.id));
        web.onClick = (id) => {
            this.clicked.signal(this.list.find(x => x.id == id));
        }
        web.onAdd = () => {
            this.addClicked.signal(this);
        }
    }

    list: Card[] = [];

    showAll(cards: Card[]) {
        this.list = [...cards];
        this.render(this.web);
    }

    show(card: Card) {
        this.list.push(card);
        this.render(this.web);
    }

    clicked = new Bus<Card>();
    addClicked = new Bus();
}

export class Position {
    render(posWeb: PositionComponent) {
        posWeb.usePosition({ x: this.x, y: this.y });
        this.card.render(posWeb.card());
    }

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
            y: this.y
        }
    }

    useCard(card: Card) {
        this.card = card;
        this.id = card.id;
    }

    fromJson(data: any) {
        return this;
    }
}

export class Board {
    web: BoardComponent;

    render(web: BoardComponent) {
        this.web = web;
        this.list.forEach(x => {
            const posWeb = web.positionFor(x.id);
            x.render(posWeb);
        });
    }

    show(card: Card) {
        const pos = new Position(card);
        this.list.push(pos);
        pos.render(this.web.positionFor(pos.id));
    }

    list: Position[] = [];
}

function table(name: string, data?: any[]) {
    if (!data) {
        const raw = localStorage.getItem(name) || "[]";
        const rawList = JSON.parse(raw) as any[]
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
        this.list = table("cards").map(x => {
            const c = new Card();
            Object.assign(c, x);
            return c;
        })
    }

    card(id: string) {
        return this.list.find(x => x.id == id);
    }

    constructor() {
        // whenever card changes
        bus.for(Card).on(card => {
            table("cards", this.list);
        });
    }

    created = new Bus<Card>();
    loaded = new Bus<Card[]>();
}

class Application {
    nav: Navigation;
    board: Board;
    list: CardList;
    async start() {
        const nav = new Navigation();
        const board = new Board();

        const list = new CardList();
        await list.load();

        list.loaded.on((cards: Card[]) => {
            nav.showAll(cards);
        })

        nav.clicked.on(card => {
            board.show(card);
        })

        nav.addClicked.on(async () => {
            list.add();
        })

        list.created.on(card => {
            nav.show(card);
        });

        this.nav = nav;
        this.board = board;
        this.list = list;
    }

    render(web: WebApplication) {
        this.nav.render(web.nav());
        this.board.render(web.board());
    }
}


const app = new Application();
export { app }

