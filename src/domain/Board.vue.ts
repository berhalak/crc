import { Board, CardList } from './../app';
import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';

export default class extends Component {
  @prop
  board: Board;

  @prop
  cards: CardList;

  get list() {
    return this.board?.list;
  }

  save() {
    this.cards?.save();
    this.board?.save();
  }
}
