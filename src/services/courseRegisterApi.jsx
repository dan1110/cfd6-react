import { domain } from '../api/domain';

const courseRegisterApi = {
	addCourse(data, slug) {
		let { token } = JSON.parse(localStorage.getItem('data'));

		return fetch(`${domain}/elearning/v4/course-register/${slug}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token.accessToken}`,
			},
		});
	},
};

export default courseRegisterApi;
