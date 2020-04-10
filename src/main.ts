import Vue from 'vue'

// import tailwind - must by after all components, to override defaults
import './style/tailwind.css'

import router from './setup/router'
import './setup/registerServiceWorker'
import './setup/registerComponents'
import './setup/registerEventBus'
import { app, Web } from './app'
import { bus } from 'geso'

Vue.config.productionTip = false

app.start().then(a => {
    new Vue({
        router,
        template: '<app />'
    }).$mount('#app');
})

bus.match("mounted", (web: Web) => {
    app.render(web);
});