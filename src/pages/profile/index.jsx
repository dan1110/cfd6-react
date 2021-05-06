import React, { useState } from "react";
import { TopInfo, Info, MyCourse, Project, Payment, Coin } from "./component";
export default function Profile() {
    const [tabActive, setTabActive] = useState(0);

    function setTab(e, index) {
        e.preventDefault();
        setTabActive(index);
    }

    return (
        <main className="profile" id="main">
            <section>
                <TopInfo />
                <div className="container">
                    <div className="tab">
                        {/* <TabTitle activeTab={setTab}/> */}
                        <div className="tab-title">
                            <a
                                href="#"
                                className="active"
                                onClick={(e) => setTab(e, 0)}
                            >
                                Thông tin tài khoản
                            </a>
                            <a href="#" onClick={(e) => setTab(e, 1)}>
                                Khóa học của bạn
                            </a>
                            <a href="#" onClick={(e) => setTab(e, 2)}>
                                Dự án đã làm
                            </a>
                            <a href="#" onClick={(e) => setTab(e, 3)}>
                                Lịch sử thanh toán
                            </a>
                            <a href="#" onClick={(e) => setTab(e, 4)}>
                                Quản lý COIN của tôi
                            </a>
                        </div>
                        <div className="tab-content">
                            {tabActive === 0 ? (
                                <Info />
                            ) : tabActive === 1 ? (
                                <MyCourse />
                            ) : tabActive === 2 ? (
                                <Project />
                            ) : tabActive === 3 ? (
                                <Payment />
                            ) : (
                                <Coin />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
