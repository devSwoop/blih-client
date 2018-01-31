import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login/Login.vue'
import Home from '@/components/Home/Home.vue'
import Hermes from '@/plugins/Hermes'
import Store from '@/store'

Vue.use(VueRouter)

/* eslint-disable */

let routes = [
	{ path: '/login', 	name: 'login', 	component: Login },
	{ path: '/', 		name: 'home', 	component: Home }
]

let Router = new VueRouter({
	mode: 'history',
	routes
})

Router.beforeEach(function (to, from, next) {
	Hermes.run({
		route: 'isLogged'
	}, function (data) {
		if (data.valid) {
			if (Store.getters.getEmail === null)
				Store.commit('SET_USER', data.email)
		}
		next()
	})
})

export default Router
