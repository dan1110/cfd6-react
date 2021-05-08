import React, { useState } from 'react';
export function Register() {
	const [registerForm, setRegisterForm] = useState({
		name: '',
		phone: '',
		email: '',
		fb: '',
		pay: '',
		idea: '',
	});
	const [error, setError] = useState({
		name: '',
		phone: '',
		email: '',
		fb: '',
		pay: '',
		idea: '',
	});

	function handleChangeInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		setRegisterForm({
			...registerForm,
			[name]: value,
		});
	}

	function handleSubmit() {
		let errorInput = {};

		//name
		if (!registerForm.name.trim()) {
			errorInput.name = 'Vui lòng nhập tên';
		}

		//phone
		if (registerForm.phone && !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(registerForm.phone)) {
			errorInput.phone = 'Số điện thoại không đúng định dạng';
		}
		if (!registerForm.phone.trim()) {
			errorInput.phone = 'Vui lòng nhập số điện thoại';
		}

		//email
		if (!registerForm.email) {
			errorInput.email = 'Email không được bỏ trống';
		}
		if (registerForm.email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(registerForm.email)) {
			errorInput.email = 'Email không đúng định dạng';
		}

		//facebook
		if (
			registerForm.fb &&
			!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(registerForm.fb)
		) {
			errorInput.fb = 'Link Facebook không đúng định dạng';
		}
		if (!registerForm.fb.trim()) {
			errorInput.fb = 'Vui lòng nhập link facebook';
		}

		//idea
		if (!registerForm.idea.trim()) {
			errorInput.idea = 'Vui lòng nhập ý kiến của bạn';
		}

		setError(errorInput);
		if (Object.keys(errorInput).length === 0) {
			console.log(registerForm);
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
									value={registerForm.name}
									onChange={handleChangeInput}
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
									value={registerForm.phone}
									onChange={handleChangeInput}
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
									value={registerForm.email}
									onChange={handleChangeInput}
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
									value={registerForm.fb}
									onChange={handleChangeInput}
								/>
								{error.fb && <span className="error-text">{error.fb}</span>}
							</label>
							<label className="disable">
								<p>Sử dụng COIN</p>
								<div className="checkcontainer">
									Hiện có <strong>300 COIN</strong>
									{/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
									{/* Cần ít nhất 200 COIN để giảm giá */}
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
								</div>
							</label>
							<label>
								<p>Hình thức thanh toán</p>
								<div className="select">
									<div className="head">Chuyển khoản</div>
									<div className="sub">
										<a href="#">Chuyển khoản</a>
										<a href="#">Thanh toán tiền mặt</a>
									</div>
								</div>
							</label>
							<label>
								<p>Ý kiến cá nhân</p>
								<input
									type="text"
									placeholder="Mong muốn cá nhân và lịch bạn có thể học."
									name="idea"
									value={registerForm.idea}
									onChange={handleChangeInput}
								/>
								{error.idea && <span className="error-text">{error.idea}</span>}
							</label>
							<div className="btn main rect" onClick={handleSubmit}>
								đăng ký
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
