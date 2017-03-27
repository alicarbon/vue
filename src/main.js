import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'

// init vue router
Vue.use(VueRouter);

// set up router
const router = new VueRouter({
    routes: routes
})

// set up app
new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
