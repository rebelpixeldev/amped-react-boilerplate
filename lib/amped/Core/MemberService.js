
export default MemberService = {

	user : null,


	getUser : () => {
	    if (this.user === null ){

	    	const headers = new Headers(Object.assign({}, this._defaultHeaders()));

	    	return fetch('/api/user', {headers})
			    .then(this._parseJSON.bind(headers))
			    .then(( resp ) => this.user = resp.response);

	    } else {
	    	Promise.resolve(this.user);
	    }
	},

	get : (url, data = {}, options = {}, supressSnack = false) =>
		this.request(Object.assign({}, options, { url, data, method : 'GET' }), supressSnack),

	request : (options = {}, supressSnack = false) => {
		return new Promise((resolve, reject) => {

			const { url, method = 'get', data = {}} = options;

			const req = new Request(url, {
				method : method.toLowerCase(),
				headers : new Headers(Object.assign({}, this._defaultHeaders(), (options.headers || {} ))),
				body : ( method === 'get' || method === 'delete' ) ? options : data
			});

			fetch(req)
				.then(this._parseJSON.bind(req.headers))
				.then((resp) => {
				    if ( resp.success ){
				    	resolve(resp);
				    	// Snack Success
				    } else {
				    	throw resp.message;
				    }
				}).catch((err) => {
					reject(err);
					// Snack Error
				})

		})
	},

	_parseJSON : (headers, resp) => {
		return headers.get('Content-Type') === 'application.json' ? resp.json() : resp;

	},

	_defaultHeaders : () => {
		return { 'Content-Type' : 'application/json', 'Authorization' : localStorage.getItem('token') }
	}


}