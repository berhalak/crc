import { Board, CardList } from './../app';
import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';

export default class extends Component {
  @prop
  board: Board;

  @prop
  cards: CardList;

  timeout: any;

  get list() {
    return this.board?.list;
  }

  save() {
    this.cards?.save();
    this.board?.save();
  }

  created() {
    this.timeout = setInterval(() => {
      this.save();
    }, 2000);
  }

  beforeDestroy(): void {
    if (this.timeout) {
      clearInterval(this.timeout);
    }
    this.timeout = null;
  }
}
