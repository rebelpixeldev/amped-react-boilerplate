import { SHOW_SNACK_BAR, HIDE_SNACK_BAR, SHOW_CONFIRM } from 'amped/Alerts/actions';


export class AmpedService{

	static user = null;

	static store = null;

	static getUser(){
		if (this.user === null ){

			const headers = new Headers(Object.assign({'Content-Type' : 'application/json'}, this._defaultHeaders()));

			return fetch(this._buildUrl('/api/user'),
				{ headers })
				.then(this._getBody.bind(this, headers))
				.then(this._parseJSON.bind(this, headers))
				.then(( resp ) => this.user = resp.response);

		} else {
			Promise.resolve(this.user);
		}
	}

	static get(url, data = {}, options = {}, supressSnack = false){
		return AmpedService.request(Object.assign({}, options, {url, data, method: 'GET'}), supressSnack);
	}

	static post(url, data = {}, options = {}, supressSnack = false){
		return AmpedService.request(Object.assign({}, options, {url, data, method: 'POST'}), supressSnack);
	}


	static request(options = {}, supressSnack = false){
		return new Promise((resolve, reject) => {

			const { url, method, data} = Object.assign({method:'get', data: {} }, options);

			const req = new Request(this._buildUrl(url), {
				method : method.toLowerCase(),
				headers : new Headers(Object.assign({}, this._defaultHeaders(), (options.headers || {} ))),
				body : ( method.toLowerCase() === 'get' || method.toLowerCase() === 'delete' ) ?
					options :
					Object.keys(data).reduce(( formData, key ) => {
						formData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]);
						return formData;
					}, new FormData())
			});



			setTimeout(() => {



				fetch(req)
					.then(this._getBody.bind(this, req.headers))
					.then(this._parseJSON.bind(this, req.headers))
					.then((resp) => {
						// if ( resp.message !== '' )
						// 	AmpedService.store.dispatch({type : SHOW_SNACK_BAR, message : resp.message, level : resp.success ? 'success' : 'error'});

						// AmpedService.store.dispatch({type : SHOW_CONFIRM, message : 'ARE YOU SURE?!?!'});

						if ( resp.success )
							resolve(resp);
						else
							throw resp;

					}).catch((err) => {
						reject(err);
				})

			}, 1000)

		})
	}

	static _buildUrl(url){
		return `http://localhost:4000${url}`;
	}

	static _getBody(headers, resp){
		console.log('GETTING BODY');
		return headers.get('Content-Type') === 'application.json' ? resp.json() : resp.text();
	}

	static _parseJSON(headers, resp){
		try {
			return JSON.parse(resp);
		}catch(e){
			return resp;
		}
	}

	static _defaultHeaders(){
		return { 'Authorization' : localStorage.getItem('amped-token'), 'foo' : 'bar'  }
	}
}

export default AmpedService;