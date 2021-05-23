import { SUBMIT_LOGIN, LOGOUT, UPDATE_INFO, ERROR, COURSE_REGISTER, HOME } from './../type';
const initialState = {
	// login: false,
	login: JSON.parse(localStorage.getItem('login')) || false,
	data: JSON.parse(localStorage.getItem('data')),
	loginErr: '',
	successCourse: '',
	home: '',
};

export default function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case SUBMIT_LOGIN: {
			localStorage.setItem('login', true);
			localStorage.setItem('data', JSON.stringify(action.payload));
			
			return {
				...state,
				// login: true,
				login: true,
				data: action.payload,
			};
		}
		case LOGOUT: {
			localStorage.setItem('login', JSON.stringify(false));
			localStorage.setItem('data', JSON.stringify(null));
			localStorage.setItem('home', JSON.stringify(null));
			return {
				...state,
				login: false,
				data: null,
			};
		}

		case UPDATE_INFO: {
			localStorage.setItem('data', JSON.stringify(action.payload));
			return {
				...state,
				data: action.payload,
			};
		}
		case COURSE_REGISTER: {
			return {
				...state,
				successCourse: action.payload,
			};
		}
		case HOME: {
			// localStorage.setItem('home', JSON.stringify(action.payload));
			return {
				...state,
				home: action.payload,
			};
		}
		case ERROR: {
			return {
				...state,
				loginErr: action.payload,
			};
		}
	}

	return state;
}
