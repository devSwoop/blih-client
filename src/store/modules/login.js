import Hermes from '../../plugins/Hermes'
import crypto from '../../../node_modules/crypto-browserify'
import * as types from '../mutation-types'

const state = {
	email: null
}

const getters = {
	getEmail: state => state.email
}

const actions = {
	login ({ commit }, auth) {
		Hermes.run({
			route: 'login',
			data: auth
		}, function (data) {
			localStorage.setItem('token', data.token)
			commit('SET_USER', auth.email)
		}, function (data) {
			console.log('Error while login')
		})
	}
}

const mutations = {
	[types.SET_USER] (state, email) {
		state.email = email
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
