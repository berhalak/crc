import { store } from './web';
import Vue from 'vue'

// import tailwind - must by after all components, to override defaults
import './style/tailwind.css'

import router from './setup/router'
import './setup/registerServiceWorker'
import './setup/registerComponents'
import './setup/registerEventBus'
import { app } from './app'

Vue.config.productionTip = false
new Vue({
    router,
    template: '<app />'
}).$mount('#app');

app.start().then(a => {
    app.render(store);
});
