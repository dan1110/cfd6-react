import { useEffect, useState } from 'react';
import homeApi from '../services/homeApi';
import { CourseItem } from './CourseItem';

export default function CourseList() {
	let [coursList, setCoursList] = useState({ online: [], offline: [] });
	useEffect(() => {
		homeApi.home().then((res) => setCoursList(res));
	}, []);

	return (
		<>
			<section className="section-courseoffline">
				<div className="container">
					<p className="top-des">
						The readable content of a page when looking at its layout. The point of using Lorem Ipsum is
						that it has a more-or-less normal
					</p>
					<div className="textbox">
						<h2 className="main-title">Khóa học Offline</h2>
					</div>
					<div className="list row">
						{coursList.offline.map((item) => (
							<CourseItem {...item} key={item._id} />
						))}
					</div>
				</div>
			</section>
			<section className="section-courseonline section-blue">
				<div className="container">
					<div className="textbox">
						<h2 className="main-title">Khóa học Online</h2>
					</div>
					<div className="list row">
						{coursList.online.map((item) => (
							<CourseItem {...item} key={item._id} />
						))}
					</div>
					<div className="text-deco">C</div>
				</div>
			</section>
		</>
	);
}
