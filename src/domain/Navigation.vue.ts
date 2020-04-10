import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';
import { VueNav } from '@/web';

export default class extends Component {
    @prop
    value: VueNav;

    clickAdd() {
        this.value?.handlers.add();
    }

    clickCard(e: any) {
        this.value?.handlers.click(e.id);
    }

    get list() {
        return this.value?.state.list;
    }
}