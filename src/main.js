// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Hermes from './plugins/Hermes'
import Endpoints from './api/endpoints'
import VueCookies from 'vue-cookies'

import('../node_modules/vuetify/dist/vuetify.min.css')

Hermes.init({
	port: 3000,
	protocol: 'http',
	baseUrl: 'localhost'
}, Endpoints)

Vue.use(VueCookies)
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
