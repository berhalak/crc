import { Component } from '@/infra/Component';
import { Board, Card } from './Card';

export default class extends Component {
    board = new Board();

    created() {
        this.board.cards = [new Card(), new Card(), new Card()];
    }
}