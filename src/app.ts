export class Card {

}


type CardHandler = (card: Card) => Promise<void> | void;

export class Navigation {
    async load(list : CardList){

    }

    
}

export class Position {

}

export class Board {
    async load(list: CardList){

    }
}


export class CardList {
    async load(){

    }
}

class App {
    async start(){
        const list = new CardList();        
        await list.load();

        const nav = new Navigation();
        await nav.load(list);

        const board = new Board();
        await board.load(list);

        nav.selected = (card: Card) => {
            board.show(card);
        }

        nav.remove = async (card: Card) => {
            board.remove(card);
            await list.remove(card);
        }

        nav.add = async () => {
            await list.create();
        }


    }
}

const Application = new App();



export { Application }

