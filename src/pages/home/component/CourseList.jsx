import { CourseItem } from "../../../components/CourseItem";

export function CourseList() {
    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its
                        layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal
                    </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
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
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
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
        </>
    );
}
