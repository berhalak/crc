import { WebApplication, NavComponent, BoardComponent, PositionComponent, CardComponent } from "./api";
import Vue from "vue"

export class VueNav implements NavComponent {
    onAdd: () => void;

    onClick: (id: any) => void;

    state = {
        list: []
    }

    handlers = {
        click: (id: string) => this.onClick?.(id),
        add: () => this.onAdd?.()
    }

    addCard(name: string, id: string): void {
        this.state.list.push({ name, id });
    }

    clear() {
        this.state.list = [];
    }
}

export class VueCard implements CardComponent {
    constructor(public id: string) {

    }


    onEdit(web: (web: CardComponent) => void) {
        this.handler = web;
    }

    handler = null;

    name: string = '';
    desc: string = '';
    links: string = '';

    update() {
        this.handler?.(this);
    }
}

export class VuePosition implements PositionComponent {
    card(): CardComponent {
        this._card = new VueCard(this.id);
        return this._card;
    }

    usePosition(arg0: { x: number; y: number; }) {
        this.x = arg0.x;
        this.y = arg0.y;
    }

    _card: CardComponent = null;

    x = 0;
    y = 0;

    constructor(private id: string) {

    }
}

export class VueBoard implements BoardComponent {

    list: VuePosition[] = []

    positionFor(id: string): PositionComponent {
        const r = new VuePosition(id);
        this.list.push(r);
        return r;
    }
}

export class VueApp implements WebApplication {
    private _nav = new VueNav();
    private _board = new VueBoard();

    nav(): NavComponent {
        return this._nav;
    }

    board(): BoardComponent {
        return this._board;
    }
}

export const store = Vue.observable(new VueApp());