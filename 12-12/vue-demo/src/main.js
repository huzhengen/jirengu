import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [{
        path: '/hello',
        component: HelloWorld
    }]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')