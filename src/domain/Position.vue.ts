import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';
import { Position, Card, Board } from './../app';

export default class extends Component {
	@prop
	value: Position

	@prop
	board: Board

	get card() {
		return this.value.card;
	}

	hide() {
		this.board?.hide(this.value);
	}

}