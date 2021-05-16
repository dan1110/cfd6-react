import { domain } from '../api/domain';

const profileApi = {
	updateInfo(data) {
		let { token } = JSON.parse(localStorage.getItem('data'));
		return fetch(`${domain}/elearning/v4/profile/update`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token.accessToken}`,
			},
		}).then((res) => res.json());
	},
};

export default profileApi;
