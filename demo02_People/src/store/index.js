import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tokenInfo:localStorage.tokenInfo?JSON.parse(localStorage.tokenInfo) : ''
	},
  getters: {},
	mutations: {
		token (a, b) {
			a.tokenInfo=b
			localStorage.tokenInfo = JSON.stringify(b)
		}
	},
  actions: {},
  modules: {}
})
