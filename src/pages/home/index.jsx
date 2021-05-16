import { useEffect, useState } from 'react';
import  CourseList from '../../components/CourseList';
import homeApi from '../../services/homeApi';
import { Action, Banner, Different, Gallery, Testimonial } from './component';

export function Home() {
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
