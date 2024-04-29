import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';
import { Position, Card, Board } from './../app';

export default class extends Component {
  @prop
  value: Position;

  @prop
  board: Board;

  get card() {
    return this.value.card;
  }

  hide() {
    this.board?.hide(this.value);
  }

  savePos(el: { x: number, y: number }) {
    this.board.pos(this.card!.id, el.x, el.y);
  }
}
