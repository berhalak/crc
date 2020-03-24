import { ComponentBase } from 'vue-strict';
import Vue from 'vue';

export type VueBus = { emit : (name : string, payload? : any) => void }

export type Event = { name : string, origin : any, params : any[], result : any }

export function handler(name : string) {
	return function (target: Object, propertyKey: string | symbol) {
		let s = <any>target;
		s.events = s.events || {};
		s.events[name] = propertyKey;
	}
}

export class Component extends ComponentBase {

    protected $bus! : VueBus;
    protected $trigger! : (name : string, payload? : any, async? : boolean) => void;

    static bootstrap(v : any, klass : any){
        // declare events
        v.events = klass.prototype.events;
    }
}