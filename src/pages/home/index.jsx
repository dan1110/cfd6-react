import { useEffect, useState } from 'react';
import CourseList from '../../components/CourseList';
import homeApi from '../../services/homeApi';
import { useDispatch, useSelector } from 'react-redux';
import { Action, Banner, Different, Gallery, Testimonial } from './component';
import { HOME } from '../../redux/type';
import { Fragment } from 'react';

export function Home() {
	let { home } = useSelector((state) => state);
	console.log(home);

	let dispatch = useDispatch();

	useEffect(async () => {
		let res = await homeApi.home();
		dispatch({
			type: HOME,
			payload: res,
		});
	}, []);

	if (!home?.review?.length > 0) return <Fragment />;
	return (
		<main className="homepage" id="main">
			<Banner />
			<CourseList offline={home?.offline} online={home?.online} />
			<Different />
			<Testimonial review={home?.review} />
			<Gallery gallery={home?.gallery} />
			<Action />
		</main>
	);
}
