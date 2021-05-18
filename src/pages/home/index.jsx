import { useEffect, useState } from 'react';
import CourseList from '../../components/CourseList';
import homeApi from '../../services/homeApi';
import { useSelector } from 'react-redux';
import { Action, Banner, Different, Gallery, Testimonial } from './component';

export function Home() {
	const state = useSelector((state) => state);
	console.log(state);
	return (
		<main className="homepage" id="main">
			<Banner />
			<CourseList />
			<Different />
			<Testimonial />
			<Gallery />
			<Action />
		</main>
	);
}
