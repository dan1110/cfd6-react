import { createContext, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/custom.scss';
import { Footer, Header } from './components';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import {
	CoinIntroduce,
	Cooprate,
	Course,
	CourseDetail,
	Email,
	ErrorPage,
	FAQ,
	Home,
	Pay,
	Profile,
	ProjectPage,
	Register,
	Team,
} from './pages';
import CountDown from './pages/CountDown';
import authApi from './services/authApi';
import homeApi from './services/homeApi';
import profileApi from './services/profileApi';
import store from './redux';

export const Context = createContext({});

function App() {
	let [state, setState] = useState({
		login: JSON.parse(localStorage.getItem('login')),
		loginErr: '',
		// data: JSON.parse(localStorage.getItem('data')) || {},
	});

	useEffect(() => {
		localStorage.setItem('login', JSON.stringify(state.login));
	}, [state.login]);

	async function handleLogin(data) {
		let res = await authApi.makeLogin(data);
		if (res.data) {
			localStorage.setItem('data', JSON.stringify(res.data));
			setState({
				...state,
				login: true,
				data: res.data,
				loginErr: '',
			});
			return {
				success: true,
			};
		} else if (res.error) {
			setState({
				...state,
				loginErr: res.error,
			});
		}
	}
	function handleLogout() {
		setState({
			...state,
			login: false,
		});
	}
	async function updateInfo(form) {
		let res = await profileApi.updateInfo(form);
		if (res.data) {
			localStorage.setItem('data', JSON.stringify(res.data));
			setState({
				...state,
				data: res.data,
			});
		}
	}

	return (
		<Provider store={store}>
			<Context.Provider value={{ ...state, handleLogin, handleLogout, updateInfo }}>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/du-an" component={ProjectPage} />
						<Route path="/team" component={Team} />
						<Route path="/dang-ki/:slug" component={Register} />
						<PrivateRoute path="/ca-nhan" component={Profile} />
						<Route path="/faq" component={FAQ} />
						{/* <Route path="/email" component={Email} /> */}
						<Route path="/khoa-hoc/:slug" component={CourseDetail} />
						<Route path="/khoa-hoc" component={Course} />
						<Route path="/thanh-toan" component={Pay} />
						<Route path="/lien-he" component={Cooprate} />
						<Route path="/gioi-thieu-coin" component={CoinIntroduce} />
						<Route path="/demo" component={CountDown} />
						<Route component={ErrorPage} />
					</Switch>
					<Footer />
					<Login />
				</BrowserRouter>
			</Context.Provider>
		</Provider>
	);
}

export default App;
