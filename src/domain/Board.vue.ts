import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';
import { VueBoard } from '@/web';

export default class extends Component {
    @prop
    value: VueBoard;

    get list() {
        return this.value?.list;
    }
}