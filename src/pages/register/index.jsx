import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import useFormValidate from '../../hook/useFormValidate';
import { COURSE_REGISTER } from '../../redux/type';
import courseRegisterApi from '../../services/courseRegisterApi';
export function Register() {
	let { slug } = useParams();
	let { successCourse } = useSelector((state) => state);
	let dispatch = useDispatch();
	let { form, error, setForm, inputChange, check } = useFormValidate(
		{
			name: '',
			phone: '',
			email: '',
			coin: false,
			fb: '',
			payment: 'Banker',
			idea: '',
		},
		{
			rule: {
				name: {
					required: true,
					pattern: 'name',
				},
				phone: {
					required: true,
					pattern: 'phone',
				},
				email: {
					required: true,
					pattern: 'email',
				},
				fb: {
					pattern:
						/(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/i,
				},
			},
			message: {
				name: {
					required: 'Họ và tên không được bỏ trống',
					pattern: 'Tên không được nhập bằng chữ số',
				},
				phone: {
					required: 'Số điện thoại không được bỏ trống',
					pattern: 'Phải là số điện thoại Việt Nam',
				},
				email: {
					required: 'Email không được bỏ trống',
					pattern: 'Email không đúng định dạng',
				},
				fb: {
					pattern: 'Link Facebook không đúng dạng',
				},
			},
		}
	);

	function handleSelected(e) {
		e.preventDefault();
		let name = e.target.dataset.name;
		let value = e.target.dataset.value;

		if (e.target.type === 'checkbox') {
			name = e.target.name;
			value = e.target.checked;
		}
		setForm({
			...form,
			[name]: value,
		});
	}

	async function handleSubmit() {
		check();

		let res = await courseRegisterApi.addCourse(form, slug);
		if (res?.success) {
			dispatch({
				type: COURSE_REGISTER,
				payload: res.success,
			});
		}
	}

	return (
		<main className="register-course" id="main">
			<section>
				<div className="container">
					<div className="wrap container">
						<div className="main-sub-title">ĐĂNG KÝ</div>
						<h1 className="main-title">Thực chiến front-end căn bản </h1>
						<div className="main-info">
							<div className="date">
								<strong>Khai giảng:</strong> 15/11/2020
							</div>
							<div className="time">
								<strong>Thời lượng:</strong> 18 buổi
							</div>
							<div className="time">
								<strong>Học phí:</strong> 6.000.000 VND
							</div>
						</div>
						<div className="form">
							<label>
								<p>
									Họ và tên<span>*</span>
								</p>
								<input
									type="text"
									placeholder="Họ và tên bạn"
									name="name"
									value={form.name}
									onChange={inputChange}
								/>
								{error.name && <span className="error-text">{error.name}</span>}
							</label>
							<label>
								<p>
									Số điện thoại<span>*</span>
								</p>
								<input
									type="text"
									placeholder="Số điện thoại"
									name="phone"
									value={form.phone}
									onChange={inputChange}
								/>
								{error.phone && <span className="error-text">{error.phone}</span>}
							</label>
							<label>
								<p>
									Email<span>*</span>
								</p>
								<input
									type="text"
									placeholder="Email của bạn"
									name="email"
									value={form.email}
									onChange={inputChange}
								/>
								{error.email && <span className="error-text">{error.email}</span>}
							</label>
							<label>
								<p>
									URL Facebook<span>*</span>
								</p>
								<input
									type="text"
									placeholder="https://facebook.com"
									name="fb"
									value={form.fb}
									onChange={inputChange}
								/>
								{error.fb && <span className="error-text">{error.fb}</span>}
							</label>
							<label className="disable">
								<p>Sử dụng COIN</p>
								<div className="checkcontainer">
									Hiện có <strong>300 COIN</strong>
									{/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
									{/* Cần ít nhất 200 COIN để giảm giá */}
									<input
										type="checkbox"
										name="coin"
										value={form.coin}
										defaultChecked={form.coin}
										onChange={handleSelected}
									/>
									<span className="checkmark" />
								</div>
							</label>
							<label>
								<p>Hình thức thanh toán</p>
								<div className="select">
									<div className="head">Chuyển khoản</div>
									<div className="sub">
										<a href="#" data-name="payment" data-value="Banker" onClick={handleSelected}>
											Chuyển khoản
										</a>
										<a href="#" data-name="payment" data-value="Craft" onClick={handleSelected}>
											Thanh toán tiền mặt
										</a>
									</div>
								</div>
							</label>
							<label>
								<p>Ý kiến cá nhân</p>
								<input
									type="text"
									placeholder="Mong muốn cá nhân và lịch bạn có thể học."
									name="idea"
									value={form.idea}
									onChange={inputChange}
								/>
							</label>
							<div className="btn main rect" onClick={handleSubmit}>
								đăng ký
							</div>
						</div>
						{successCourse && (
							<p
								className="success"
								style={{
									color: 'green',
									fontSize: 20,
									textAlign: 'center',
									marginTop: 20,
									fontWeight: 700,
								}}
							>
								{successCourse}
							</p>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
