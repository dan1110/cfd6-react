import React, { useState } from 'react';
import reactDom from 'react-dom';
import { Link } from 'react-router-dom';

export default function Login() {
	const [loginForm, setLoginForm] = useState({
		user: '',
		pass: '',
	});
	const [error, setError] = useState({
		user: '',
		pass: '',
	});

	function handleChangeInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		setLoginForm({
			...loginForm,
			[name]: value,
		});
	}

	function handleSubmit() {
		let errorInput = {};
		if (!loginForm.user) {
			errorInput.user = 'Vui lòng nhập Email/ Số điện thoại';
		}
		if (loginForm.user && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(loginForm.user)) {
			errorInput.user = 'Email hoặc Số điện thoại không đúng định dạng';
		}
		//pass
		if (!loginForm.pass) {
			errorInput.pass = 'Vui lòng nhập mật khẩu';
		}
		if (loginForm.pass && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(loginForm.pass)) {
			errorInput.pass = 'Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái và một số';
		}

		setError(errorInput);
		if (Object.keys(errorInput).length === 0) {
			console.log(loginForm);
		}
	}

	function closePopup(e) {
		e.preventDefault();
		document.querySelector('.res').style.display = 'none';
	}

	return reactDom.createPortal(
		<div className="popup-form popup-login res" style={{ display: 'none' }}>
			<div className="wrap">
				{/* login-form */}
				<div className="ct_login" style={{ display: 'block' }}>
					<h2 className="title">Đăng nhập</h2>
					<input type="text" placeholder="Email / Số điện thoại" name="user" onChange={handleChangeInput} />
					{error.user && <span className="error-text">{error.user}</span>}

					<input type="password" placeholder="Mật khẩu" name="pass" onChange={handleChangeInput} />
					{error.pass && <span className="error-text">{error.pass}</span>}
					<div className="remember">
						<label className="btn-remember">
							<div>
								<input type="checkbox" />
							</div>
							<p>Nhớ mật khẩu</p>
						</label>
						<a href="#" className="forget">
							Quên mật khẩu?
						</a>
					</div>
					<div className="btn rect main btn-login" onClick={handleSubmit}>
						đăng nhập
					</div>
					<div className="text-register">
						<strong>hoặc đăng ký bằng</strong>
					</div>
					<div>
						<div className="btn btn-icon rect white btn-google">
							<img src="/img/google.svg" alt="" />
							Google
						</div>
					</div>
					<a href="#" className="close" onClick={closePopup}>
						<img src="/img/close-icon.png" alt="" />
					</a>
				</div>
				{/* email form */}
				{/* <div className="ct_email">
						<h2 className="title">Đặt lại mật khẩu</h2>
						<input type="text" placeholder="Email" />
						<div className="btn rect main btn-next">Tiếp theo</div>
						<div className="back" />
						<div className="close">
							<img src="/img/close-icon.png" alt="" />
						</div>
					</div> */}
			</div>
		</div>,

		document.getElementById('root2')
	);
}
