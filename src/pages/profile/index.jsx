import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { Coin, Info, MyCourse, Payment, Project, TopInfo } from "./component";
export function Profile() {
  const { path } = useRouteMatch();

  let { login } = useAuth();

  if (!login) return <Redirect path="/" />;

  return (
    <main className="profile" id="main">
      <section>
        <TopInfo />
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink exact to={`${path}`}>
                Thông tin tài khoản
              </NavLink>
              <NavLink to={`${path}/khoa-hoc-cua-toi`}>
                Khóa học của bạn
              </NavLink>
              <NavLink to={`${path}/du-an`}>Dự án đã làm</NavLink>
              <NavLink to={`${path}/thanh-toan`}>Lịch sử thanh toán</NavLink>
              <NavLink to={`${path}/quan-ly-coin`}>
                Quản lý COIN của tôi
              </NavLink>
            </div>
            <div className="tab-content">
              <Switch>
                <Route exact path={`${path}/quan-ly-coin`} component={Coin} />
                <Route path={`${path}/khoa-hoc-cua-toi`} component={MyCourse} />
                <Route path={`${path}/du-an`} component={Project} />
                <Route path={`${path}/thanh-toan`} component={Payment} />
                <Route path={`${path}`} component={Info} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
