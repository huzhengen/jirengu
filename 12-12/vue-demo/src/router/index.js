import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Hello1 from '../components/Hello1'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/hello',
        component: HelloWorld
    }, {
        path: '/hello1',
        component: Hello1
    }]
})