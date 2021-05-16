import { domain } from '../api/domain';
const authApi = {
	makeLogin(data) {
		return fetch(`${domain}/elearning/v4/login`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.json());
	},
};

export default authApi;
