import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';
import { Position, Card } from './../app';

export default class extends Component {
    @prop
    value: Position

    get card() {
        return this.value.card;
    }
}