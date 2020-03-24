export class Collaborator {
    name = '';
    collaboration = '';
}

export class Card {
    name = '';
    duties: string[] = [];
    collaborators: Collaborator[] = [];
}

export class Board {
    cards: Card[] = [];
}