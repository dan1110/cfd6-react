import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useParams } from "react-router";
import { Banner, Introduce, Course, ProjectCourse } from './component';

export function CourseDetail() {
	//Dynamic router (URL param)
	// let param = useParams();
	// console.log(param);	
	const [courseDetail, setCourseDetail] = useState();
	let { slug } = useParams();
	useEffect(() => {
		fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course/${slug}`)
			.then((res) => res.json())
			.then((res) => setCourseDetail(res));
	}, [slug]);

	return (
		<>
			<main className="course-detail" id="main">
				<Banner courseDetail={courseDetail} />
				<Introduce courseDetail={courseDetail} />
				<ProjectCourse />
				<Course />
			</main>
		</>
	);
}
