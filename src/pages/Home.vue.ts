import { Component } from '@/infra/Component';
import { Web, WebNav, WebBoard } from '@/app';
import { bus } from 'geso';



export default class extends Component implements Web {
    nav(): WebNav {
        return this.$refs.nav;
    }    
    
    board(): WebBoard {
        return this.$refs.board;
    }

    mounted(){
        bus.emit("mounted", this);
    }
}