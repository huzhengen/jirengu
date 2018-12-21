import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Hello1 from '../components/Hello1'
import Parent from '../components/Parent'
import Son from '../components/Son'
import Outter from '../components/Outter'

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
    }, {
        name: 'parent',
        path: '/parent',
        component: Parent
    }, {
        name: 'son',
        path: '/son',
        component: Son
    }, {
        name: 'outter',
        path: '/outter',
        component: Outter
    }]
})