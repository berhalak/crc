import { Component } from '@/infra/Component';
import { prop } from 'vue-strict';

export default class extends Component {        
    public msg = "Hello from code behind";

    public created(){
        this.$trigger("Started", "Home started");
    }
}