export class Collaborator {
	name = '';
	collaboration = '';
}

export class Card {
	static async load(): Promise<Card[]> {
		const data = localStorage.getItem("cards") ?? "[]";
		const list = JSON.parse(data) as any[];
		return list.map(x => new Card(x));
	}

	static async addNew() {
		const data = localStorage.getItem("cards") ?? "[]";
		const list = JSON.parse(data) as any[];
		list.push(new Card());
		localStorage.setItem("cards", JSON.stringify(list));
	}

	name = 'Unknown';
	duties: string = '';
	collaborators: string = '';

	constructor(data?: any) {
		if (data) {
			this.name = data.name;
			this.duties = data.duties;
			this.collaborators = data.collaborators;
		}
	}
}

export class Board {
	cards: Card[] = [];
}