import authApi from './authApi';
import { endpoint } from './config';
const homeApi = {
	async home() {
		let res = await fetch(`${endpoint}/elearning/v4/home`, {});
		if (res.status === 200) {
			return res.json();
		}
		if (res.status === 403) {
			await authApi.refreshToken();
			return fetch(`${endpoint}/elearning/v4/home`, {}).then((res) => res.json());
		}
	},
};

export default homeApi;
