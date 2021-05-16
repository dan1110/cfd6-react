import React, { useContext, useState } from 'react';
import reactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { Context } from '../App';
import useAuth from '../hook/useAuth';
import useFormValidate from '../hook/useFormValidate';
import authApi from '../services/authApi';

export default function Login() {
	let { form, error, inputChange, check } = useFormValidate(
		{
			username: '',
			password: '',
		},
		{
			rule: {
				username: {
					required: true,
					pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
				},
				password: {
					required: true,
					// pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
				},
			},
			message: {
				username: {
					required: 'Email/ SDT không được bỏ trống',
					pattern: 'Email/ SDT không đúng định dạng',
				},
				password: {
					required: 'Mật khẩu không được bỏ trống',
					pattern: 'Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái và một số',
				},
			},
		}
	);
	function closePopup() {
		document.querySelector('.res').style.display = 'none';
	}

	let { handleLogin, loginErr } = useAuth();

	async function onSubmit() {
		let inputError = check();

		if (Object.keys(inputError).length === 0) {
			let res = await handleLogin(form);
			if (res?.success) {
				closePopup();
			}
		}
	}

	return reactDom.createPortal(
		<div className="popup-form popup-login res" style={{ display: 'none' }}>
			<div className="wrap">
				{/* login-form */}
				<div className="ct_login" style={{ display: 'block' }}>
					<h2 className="title">Đăng nhập</h2>
					{loginErr && <p className="error-text">{loginErr}</p>}
					<input
						type="text"
						value={form.username}
						placeholder="Email / Số điện thoại"
						name="username"
						onChange={inputChange}
					/>
					{error.username && <span className="error-text">{error.username}</span>}

					<input
						value={form.password}
						type="password"
						placeholder="Mật khẩu"
						name="password"
						onChange={inputChange}
					/>
					{error.password && <span className="error-text">{error.password}</span>}
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
					<Link to="/" className="btn rect main btn-login" onClick={onSubmit}>
						đăng nhập
					</Link>
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
