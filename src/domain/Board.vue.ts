import { Board } from './../app';
import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';

export default class extends Component {
    @prop
    value: Board;

    get list() {
        return this.value?.list;
    }
}