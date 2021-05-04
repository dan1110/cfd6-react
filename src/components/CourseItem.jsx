export function CourseItem({
    courseName,
    courseImg,
    description,
    status,
    teacherName,
    avtTeacher,
}) {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src={courseImg} alt="" />
                    {/* <span className="badge b2">Đang diễn ra</span> */}
                    {status === "dang-dien-ra" ? (
                        <span className="badge b1">Đang diễn ra</span>
                    ) : status === "sap-dien-ra" ? (
                        <span className="badge b2">Sắp diễn ra</span>
                    ) : (
                        <span className="badge b3">Đã kết thúc</span>
                    )}
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="img/icon-user-white.svg" alt="" />
                                12
                            </div>
                            <div className="heart">
                                <img src="img/icon-heart.svg" alt="" /> 100
                            </div>
                        </div>
                        <div className="share">
                            <img src="img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {courseName}
                    </a>
                    <p className="des">{description}</p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={avtTeacher} alt="avt" />
                        </div>
                        <div className="name">{teacherName}</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>
    );
}
