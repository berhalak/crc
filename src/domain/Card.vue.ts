import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';
import { Card } from './Card';

export default class extends Component {
    @prop
    value: Card = null;


}