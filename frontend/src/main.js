import Vue from 'vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import App from './App.vue'

window.App = new Vue({
    render: h => h(App),
    store,
    router,
    vuetify,
});
