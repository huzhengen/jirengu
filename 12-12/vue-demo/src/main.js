import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

let store = new Vuex.Store({
    state: {
        num: 66
    }
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')