import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        num: 10
    },
    mutations: {
        increase(state) {
            state.num++
        },
        reduce(state) {
            state.num--
        },
    },
    actions: {
        increaseAction(context) {
            context.commit('increase');
        },
        reduceAction(context) {
            context.commit('reduce');
        }
    },
    getters: {
        getNum(state) {
            return state.num > 0 ? state.num : 0
        }
    }
})