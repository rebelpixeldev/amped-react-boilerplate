import { SHOW_SNACK_BAR, HIDE_SNACK_BAR, SHOW_CONFIRM } from 'amped/Alerts/actions';


export class MemberService{

	static user = null;

	static store = null;

	static getUser(){
		if (this.user === null ){

			const headers = new Headers(Object.assign({}, this._defaultHeaders()));

			return fetch('/api/user', {headers})
				.then(this._parseJSON.bind(this, headers))
				.then(( resp ) => this.user = resp.response);

		} else {
			Promise.resolve(this.user);
		}
	}

	static get(url, data = {}, options = {}, supressSnack = false){
		return MemberService.request(Object.assign({}, options, {url, data, method: 'GET'}), supressSnack);
	}


	static request(options = {}, supressSnack = false){
		return new Promise((resolve, reject) => {

			const { url, method = 'get', data = {}} = options;

			const req = new Request(this._buildUrl(url), {
				method : method.toLowerCase(),
				headers : new Headers(Object.assign({}, this._defaultHeaders(), (options.headers || {} ))),
				body : ( method === 'get' || method === 'delete' ) ? options : data
			});

			setTimeout(() => {



				fetch(req)
					.then(this._getBody.bind(this, req.headers))
					.then(this._parseJSON.bind(this, req.headers))
					.then((resp) => {
						console.log(MemberService.store);

						// if ( resp.message !== '' )
						// 	MemberService.store.dispatch({type : SHOW_SNACK_BAR, message : resp.message, level : resp.success ? 'success' : 'error'});

						MemberService.store.dispatch({type : SHOW_CONFIRM, message : 'ARE YOU SURE?!?!'});

						if ( resp.success )
							resolve(resp);
						else
							throw resp.message;

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
		return { 'Content-Type' : 'application/json', 'Authorization' : localStorage.getItem('token') }
	}
}

export default MemberService;