import { store } from './../web';
import { Component } from '@/infra/Component';

export default class extends Component {
    get store() {
        return store;
    }
}