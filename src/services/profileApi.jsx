import authApi from './authApi';
import { endpoint } from './config';

const profileApi = {
	async updateInfo(data) {
		let token = JSON.parse(localStorage.getItem('token'))?.accessToken;
		let res = await fetch(`${endpoint}/elearning/v4/profile/update`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		if (res.status === 200) {
			return res.json();
		}
		if (res.status === 403) {
			await authApi.refreshToken();
			let token = JSON.parse(localStorage.getItem('token'))?.accessToken;
			return fetch(`${endpoint}/elearning/v4/profile/update`, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}).then((res) => res.json());
		}
	},
};

export default profileApi;
