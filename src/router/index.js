import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login.vue'

Vue.use(Router)

/* eslint-disable */

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Login',
			component: Login
		}
	]
})
