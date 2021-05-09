import { CourseItem } from '../../../components/CourseItem';

export function CourseOn() {
	return (
		<section className="section-1">
			<div className="container">
				<h2 className="main-title">KHÓA HỌC CFD</h2>
				<p className="top-des">
					The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
					has a more-or-less normal
				</p>
				<div className="textbox">
					<h3 className="sub-title">KHÓA HỌC</h3>
					<h2 className="main-title">ONLINE</h2>
				</div>
				<div className="list row">
					<CourseItem
						courseName=" Animation"
						courseImg="img/img1.png"
						description="One of the best corporate fashion brands
                        in Sydney"
						teacherName="Dang Vuong"
						avtTeacher="img/avt.png"
					/>
					<CourseItem
						courseName=" Animation"
						courseImg="img/img2.png"
						description="One of the best corporate fashion brands
                        in Sydney"
						status="sap-dien-ra"
						teacherName="Dang Vuong"
						avtTeacher="img/avt.png"
					/>
					<CourseItem
						courseName=" Animation"
						courseImg="img/img3.png"
						description="One of the best corporate fashion brands
                        in Sydney"
						teacherName="Dang Vuong"
						avtTeacher="img/avt.png"
					/>
					<CourseItem
						courseName=" Animation"
						courseImg="img/img4.png"
						description="One of the best corporate fashion brands
                        in Sydney"
						status="dang-dien-ra"
						teacherName="Dang Vuong"
						avtTeacher="img/avt.png"
					/>

					<CourseItem
						courseName=" Animation"
						courseImg="img/img5.png"
						description="One of the best corporate fashion brands
                        in Sydney"
						status="sap-dien-ra"
						teacherName="Dang Vuong"
						avtTeacher="img/avt.png"
					/>
					<CourseItem
						courseName=" Animation"
						courseImg="img/img6.png"
						description="One of the best corporate fashion brands
                        in Sydney"
						status="dang-dien-ra"
						teacherName="Dang Vuong"
						avtTeacher="img/avt.png"
					/>
				</div>
			</div>
		</section>
	);
}
