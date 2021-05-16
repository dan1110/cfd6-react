import { domain } from '../api/domain';

const contactApi = {
	addContact(data) {
		let { token } = JSON.parse(localStorage.getItem('data'));
		return fetch(`${domain}/elearning/v4/contact`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token.accessToken}`,
			},
		}).then((res) => res.json());
	},
};

export default contactApi;
