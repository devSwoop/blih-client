import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/login'
import Repositories from './modules/repositories'

Vue.use(Vuex)

export default new Vuex.Store({
	actions: {
		loadData ({ dispatch }) {
			dispatch('loadRepositories')
		}
	},
	getters: {},
	modules: {
		Login,
		Repositories
	},
	settings: {}
})
