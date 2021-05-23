import { endpoint } from './config';
const authApi = {
	async refreshToken() {
		let refreshToken = JSON.parse(localStorage.getItem('token'))?.refreshToken;
		let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
			method: 'POST',
			body: JSON.stringify({
				refreshToken: refreshToken,
			}),
			headers: {
				'Content-Type': 'application/json',
				// Authorization: `Bearer ${token.accessToken}`,
			},
		}).then((res) => res.json());
		if (res?.data?.accessToken) {
			localStorage.setItem('token', JSON.stringify(res.data));
		}
		return true;
		// .then((res) => {
		// });
	},
	makeLogin(data) {
		return fetch(`${endpoint}/elearning/v4/login`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json());
	},
};

export default authApi;
