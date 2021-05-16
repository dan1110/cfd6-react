import React, { useEffect, useState } from 'react';
import '../../assets/custom.scss';
import useFormValidate from '../../hook/useFormValidate';
import contactApi from '../../services/contactApi';

export function Cooprate() {
	const [success, setSuccess] = useState(false);
	let { form, error, inputChange, check } = useFormValidate(
		{
			name: '',
			phone: '',
			email: '',
			website: '',
			title: '',
			content: '',
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
				website: {
					pattern: 'url',
				},
				title: {
					required: true,
				},
				content: {
					required: true,
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
				website: {
					required: 'Website không được bỏ trống',
					pattern: 'Website không đúng dạng',
				},
				title: {
					required: 'Tiêu đề không được bỏ trống',
				},
				content: {
					required: 'Nội dung không được bỏ trống',
				},
			},
		}
	);

	async function handleSubmit() {
		check();

		if (Object.keys(error).length === 0) {
			let res = await contactApi.addContact(form);
			setSuccess(res.success);
		}
	}

	return (
		<main className="register-course" id="main">
			<section className="section-1 wrap container">
				<h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
				<p className="top-des">
					Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
					việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
				</p>
				<div className="form">
					<label>
						<p>
							Họ và tên<span>*</span>
						</p>
						<input
							type="text"
							name="name"
							placeholder="Họ và tên bạn"
							value={form.name}
							onChange={inputChange}
						/>
						{error.name && <span className="error-text">{error.name}</span>}
					</label>
					<label>
						<p>Số điện thoại</p>
						<input
							type="text"
							name="phone"
							placeholder="Số điện thoại"
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
							name="email"
							placeholder="Email của bạn"
							value={form.email}
							onChange={inputChange}
						/>
						{error.email && <span className="error-text">{error.email}</span>}
					</label>
					<label>
						<p>Website</p>
						<input
							type="text"
							name="website"
							placeholder="Đường dẫn website http://"
							value={form.website}
							onChange={inputChange}
						/>
						{error.website && <span className="error-text">{error.website}</span>}
					</label>
					<label>
						<p>
							Tiêu đề<span>*</span>
						</p>
						<input
							type="text"
							name="title"
							placeholder="Tiêu đề liên hệ"
							value={form.title}
							onChange={inputChange}
						/>
						{error.title && <span className="error-text">{error.title}</span>}
					</label>
					<label>
						<p>
							Nội dung<span>*</span>
						</p>
						<textarea
							name="content"
							id
							cols={30}
							rows={10}
							defaultValue={''}
							value={form.content}
							onChange={inputChange}
						/>
						{error.content && <span className="error-text">{error.content}</span>}
					</label>
					<div className="btn main rect" onClick={handleSubmit}>
						đăng ký
					</div>
				</div>
				{success && (
					<p
						className="success"
						style={{ color: 'green', fontSize: 20, textAlign: 'center', marginTop: 20, fontWeight: 700 }}
					>
						Gửi thành công
					</p>
				)}
			</section>
		</main>
	);
}
