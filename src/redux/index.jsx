import { createStore } from 'redux';
import CountReducer from './reducer/countReducer';

let reducer = CountReducer;

let store = createStore(reducer);

export default store;
