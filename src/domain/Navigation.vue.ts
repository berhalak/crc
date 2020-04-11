import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';
import { Navigation, Card } from '@/app';

export default class extends Component {
    @prop
    value: Navigation;

    clicked(card: Card) {
        this.value?.clicked.signal(card);
    }

    add() {
        this.value?.addClicked.signal(this.value);
    }

    get list() {
        return this.value?.list;
    }
}