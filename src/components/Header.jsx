import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useDeLayLink from '../hook/useDelayLink';

export function Header() {
	function overlayClick() {
		document.body.classList.remove('.menu-is-show');
	}

	let deLayLink = useDeLayLink();

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
					<Link onClick={deLayLink} to="/" className="logo">
						<img src="img/logo.svg" alt="" />
						<h1>CFD</h1>
					</Link>
					<div className="right">
						<div className="have-login">
							<div className="account">
								{/* <a href="#" className="info"> */}
								<Link to="/ca-nhan" className="info">
									<div className="name">Trần Lê Trọng Nghĩa</div>
									<div className="avatar">
										<img src="img/avt.png" alt="" />
									</div>
									{/* </a> */}
								</Link>
							</div>
							<div className="hamberger"></div>
							<div className="sub">
								<Link to="/ca-nhan/khoa-hoc-cua-toi">Khóa học của tôi</Link>
								<Link to="/ca-nhan">Thông tin tài khoản</Link>
								<a href="#">Đăng xuất</a>
							</div>
						</div>
					</div>
				</div>
			</header>
			<nav className="nav">
				<ul>
					<li className="li_login">
						<a href="#">Đăng ký / Đăng nhập</a>
					</li>
					<li>
						<NavLink exact to="/" onClick={deLayLink}>
							Trang chủ
						</NavLink>
					</li>
					<li>
						<NavLink to="/team" onClick={deLayLink}>
							CFD Team
						</NavLink>
					</li>
					<li>
						<NavLink to="/khoa-hoc" onClick={deLayLink}>
							Khóa Học
						</NavLink>
					</li>
					<li>
						<NavLink to="/du-an" onClick={deLayLink}>
							Dự Án
						</NavLink>
					</li>
					<li>
						<NavLink to="/lien-he" onClick={deLayLink}>
							Liên hệ
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="overlay_nav" onClick={overlayClick} />
		</>
	);
}
