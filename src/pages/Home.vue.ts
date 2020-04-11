import { Component } from '@/infra/Component';
import { Application } from '@/app';

export default class extends Component {
    app = new Application();

    async created() {
        await this.app.start();
    }

    get nav() {
        return this.app.nav;
    }

    get board() {
        return this.app.board;
    }
}