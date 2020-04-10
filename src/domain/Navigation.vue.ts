import { Component } from '@/infra/Component';
import { Web, WebNav, WebBoard } from '@/app';
import { bus } from 'geso';



export default class extends Component implements WebNav {
    add: () => void;   
    click: (id: any) => void;

    addCard(name: string, id: string): void {

        this.list.push({name, id})
    }

    list = [];

    clear() {
        this.list = [];
    }   

    clickCard(e){
        if (this.click){
            this.click(e.id);
        }
    }

    clickAdd(){        
        if (this.add){
            this.add();
        }
    }
       mounted(){
        bus.signal("mounted", this);
    }
}