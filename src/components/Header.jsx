import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import useDeLayLink from '../hook/useDelayLink';

export function Header() {
	let deLayLink = useDeLayLink();
	const dispatch = useDispatch();
	// let { login, handleLogout, data } = useAuth();
	let { login, data } = useSelector((state) => state);

	function overlayClick() {
		document.body.classList.remove('.menu-is-show');
	}

	function _onClick() {
		document.querySelector('.loading').style.transform = 'scale(20)';
	}

	function openModal(e) {
		e.preventDefault();
		document.querySelector('.res').style.display = 'flex';
	}

	function logOut(e) {
		e.preventDefault();
		// handleLogout();
		dispatch({
			type: 'LOGOUT',
		});
	}
	return (
		<>
			<header id="header">
				<div className="wrap">
					<div className="menu-hambeger">
						<div className="button">
							<span />
							<span />
							<span />
						</div>
						<span className="text">menu</span>
					</div>
					<Link
						onClick={(e) => {
							_onClick();
							deLayLink(e);
						}}
						to="/"
						className="logo"
					>
						<img src="/img/logo.svg" alt="" />
						<h1>CFD</h1>
					</Link>
					<div className="right">
						{login ? (
							<div className="have-login">
								<div className="account">
									<Link to="/ca-nhan" className="info">
										<div className="name">{data?.name}</div>
										<div className="avatar">
											<img src={data?.avatar} alt="" />
										</div>
									</Link>
								</div>
								<div className="hamberger"></div>
								<div className="sub">
									<Link to="/ca-nhan/khoa-hoc-cua-toi">Khóa học của tôi</Link>
									<Link to="/ca-nhan">Thông tin tài khoản</Link>
									<a href="#" onClick={logOut}>
										Đăng xuất
									</a>
								</div>
							</div>
						) : (
							<div class="not-login bg-none">
								<a href="#" class="btn-register" onClick={openModal}>
									Đăng nhập
								</a>
								<Link
									to="/dang-ki"
									class="btn main"
									onClick={(e) => {
										_onClick();
										deLayLink(e);
									}}
								>
									Đăng ký
								</Link>
							</div>
						)}
					</div>
				</div>
			</header>
			<nav className="nav">
				<ul>
					<li className="li_login">
						<a href="#">Đăng ký / Đăng nhập</a>
					</li>
					<li>
						<NavLink
							exact
							to="/"
							onClick={(e) => {
								_onClick();
								deLayLink(e);
							}}
						>
							Trang chủ
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/team"
							onClick={(e) => {
								_onClick();
								deLayLink(e);
							}}
						>
							CFD Team
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/khoa-hoc"
							onClick={(e) => {
								_onClick();
								deLayLink(e);
							}}
						>
							Khóa Học
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/du-an"
							onClick={(e) => {
								_onClick();
								deLayLink(e);
							}}
						>
							Dự Án
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/lien-he"
							onClick={(e) => {
								_onClick();
								deLayLink(e);
							}}
						>
							Liên hệ
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="overlay_nav" onClick={overlayClick} />
		</>
	);
}
