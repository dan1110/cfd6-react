import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
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
    Login
} from './pages';
import './assets/custom.scss';

function App() {
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
				<Route path="/email" component={Email} />
				<Route path="/chi-tiet-khoa-hoc" component={CourseDetail} />
				<Route path="/khoa-hoc" component={Course} />
				<Route path="/thanh-toan" component={Pay} />
				<Route path="/lien-he" component={Cooprate} />
				<Route path="/gioi-thieu-coin" component={CoinIntroduce} />
				<Route path="/dang-nhap" component={Login} />
				<Route component={ErrorPage} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
