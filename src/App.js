import { useRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/custom.scss';
import { Footer, Header } from './components';
import Login from './components/Login';
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

function App() {
	let inputRef = useRef();
	let loginModelRef = useRef();

	function openLogin() {
		loginModelRef.current.open();
	}
	function closeLogin() {
		loginModelRef.current.close();
	}
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/du-an" component={ProjectPage} />
				<Route path="/team" component={Team} />
				<Route path="/dang-ki" component={Register} />
				<Route path="/ca-nhan" component={Profile} />
				<Route path="/faq" component={FAQ} />
				{/* <Route path="/email" component={Email} /> */}
				<Route path="/chi-tiet-khoa-hoc" component={CourseDetail} />
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
	);
}

export default App;
