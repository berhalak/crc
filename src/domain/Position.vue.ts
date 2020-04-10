import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';
import { VueBoard, VuePosition, VueCard } from '@/web';

export default class extends Component {
    @prop
    value: VuePosition;

    get x() {
        return this.value.x;
    }

    get y() {
        return this.value.y;
    }

    get card(): VueCard {
        return this.value._card as VueCard;
    }

    get name() {
        return this.value._card?.name;
    }

    set name(v) {
        if (this.card) {
            this.card.name = v;
            this.card.update();
        }
    }
}