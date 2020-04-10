import Vue from 'vue'

// import tailwind - must by after all components, to override defaults
import './style/tailwind.css'

import router from './setup/router'
import './setup/registerServiceWorker'
import './setup/registerComponents'
import './setup/registerEventBus'
import { Application } from './app'

Vue.config.productionTip = false

Application.start().then(a => {
    new Vue({
        router,
        template: '<app />'
    }).$mount('#app')
})