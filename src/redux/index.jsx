import { applyMiddleware, createStore } from 'redux';
import AuthReducer from './reducer/authReducer';

let reducer = AuthReducer;

// const middleware = (store) => (next) => (action) => {
// 	console.log(action);
// 	next(action);
// };applyMiddleware(middleware)

let store = createStore(reducer);

export default store;
