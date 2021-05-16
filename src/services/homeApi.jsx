import { domain } from '../api/domain';
const homeApi = {
	home() {
		return fetch(`${domain}/elearning/v4/home`, {}).then((res) => res.json());
	},
};

export default homeApi;
