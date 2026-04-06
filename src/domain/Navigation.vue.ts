import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';
import { Navigation, Card } from '@/app';

export default class extends Component {
  @prop
  nav: Navigation;

  clicked(card: Card) {
    this.nav?.cardClicked(card);
  }

  add() {
    this.nav?.requestAdd();
  }

  get list() {
    return this.nav?.list;
  }
}
