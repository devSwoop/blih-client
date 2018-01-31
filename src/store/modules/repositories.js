import * as types from '../mutation-types'
import Hermes from '../../plugins/Hermes'

const state = {
	repositories: null
}

const getters = {
	getRepositories: state => state.repositories
}

const actions = {
	loadRepositories ({ commit }) {
		Hermes.run({
			route: 'repositories.list'
		}, function (data) {
			commit('SET_REPOSITORIES', data)
		}, function (data) {
		})
	}
}

const mutations = {
	[types.SET_REPOSITORIES] (state, repositories) {
		state.repositories = repositories.repositories
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
