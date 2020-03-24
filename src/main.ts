import Vue from 'vue'

// import tailwind - must by after all components, to override defaults
import './style/tailwind.css'

import router from './setup/router'
import './setup/registerServiceWorker'
import './setup/registerComponents'
import './setup/registerEventBus'


Vue.config.productionTip = false

import Moveable from 'vue-moveable';

Vue.component("moveable", Moveable);

new Vue({
	router,
	template: '<app />'
}).$mount('#app')
