import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hook/useAuth';

export default function PrivateRoute(props) {
	let { login } = useSelector((state) => state);

	if (!login) {
		// setTimeout(() => {
		// 	document.querySelector('.res').style.display = 'flex';
		// }, 0);
		return (
			<Route>
				<Redirect to="/" />;
			</Route>
		);
	}
	return <Route {...props} />;
}
