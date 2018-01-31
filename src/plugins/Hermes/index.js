import store from '../../store'
import request from 'browser-request'

const Hermes = {
	init (options, routes) {
		Object.assign(this._options, options)
		this.api = routes
	},
	listeners: [],
	api: {},
	_options: {
		port: 80,
		protocol: 'http',
		baseUrl: 'localhost',
		method: 'GET',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	},
	addRequestListener: function (listener) {
		this.listeners.push(listener)
	},
	notifyRequest: function () {
		for (var i = 0; i < this.listeners.length; i++) {
			this.listeners[i](this.pendingRequests)
		}
	},
	pendingRequests: 0,
	run (options, cb, cbError) {
		var params = options.params
		var body = options.data
		var api = eval('this.api.' + options.route)
		var route = this._getRoute(api.route, params)

		options = Object.assign({}, this._options, options)
		options.method = (typeof api.method !== 'undefined') ? (api.method) : (options.method)

		var url = `${options.protocol}://${options.baseUrl}:${options.port}${route}?token=${localStorage.getItem('token')}`

		this.pendingRequests++
		this.notifyRequest()
		fetch(url, {
			credentials: options.credentials,
			method: options.method,
			withCredentials: true,
			headers: options.headers,
			body: JSON.stringify(body)
		}).then((response) => {
			response.text().then((data) => {
				this.pendingRequests--;
				this.notifyRequest()
				data = JSON.parse(data);
				if (data.success === false) {
					if (typeof cbError === 'function')
						return cbError(data)
				}
				return cb(data);
			})
		})
	},
	_getRoute (route, params) {
		for (var key in params) {

		}
		return route
	}
}

export default Hermes
