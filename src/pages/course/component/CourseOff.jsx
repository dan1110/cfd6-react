import { CourseItem } from '../../../components/CourseItem';
import useAuth from '../../../hook/useAuth';

export function CourseOff() {
	let { data } = useAuth();
	return (
		<section className="section-2 section-blue">
			<div className="container">
				<div className="textbox white">
					<h3 className="sub-title">KHÓA HỌC</h3>
					<h2 className="main-title">OFFLINE</h2>
				</div>
				<div className="list row">
					<CourseItem
						courseName=" Animation"
						courseImg="img/img1.png"
						description="One of the best corporate fashion brands
                        in Sydney"
						status="sap-dien-ra"
						teacherName="Dang Vuong"
						avtTeacher="img/avt.png"
					/>
					<CourseItem
						courseName=" Animation"
						courseImg="img/img1.png"
						description="One of the best corporate fashion brands
                        in Sydney"
						status="dang-dien-ra"
						teacherName="Dang Vuong"
						avtTeacher="img/avt.png"
					/>
					<CourseItem
						courseName=" Animation"
						courseImg="img/img1.png"
						description="One of the best corporate fashion brands
                        in Sydney"
						teacherName="Dang Vuong"
						avtTeacher="img/avt.png"
					/>
				</div>
				<div className="text-deco">C</div>
			</div>
		</section>
	);
}
