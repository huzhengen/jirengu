import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Hello1 from '../components/Hello1'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        name: 'hello',
        path: '/hello/hellomsg',
        component: HelloWorld
    }, {
        name: 'hello1',
        path: '/hello1/hello1msg',
        component: Hello1
    }]
})