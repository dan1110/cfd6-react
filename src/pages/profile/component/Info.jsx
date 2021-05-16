import React, { useState } from 'react';
import useAuth from '../../../hook/useAuth';
import useFormValidate from '../../../hook/useFormValidate';
import profileApi from '../../../services/profileApi';

export function Info() {
	let { data, updateInfo } = useAuth();
	console.log(data);

	let { form, error, setForm, inputChange, check } = useFormValidate(
		{
			...data,
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
					required: true,
					pattern: 'fb',
				},
				skype: {
					required: true,
					pattern: 'skype',
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
					required: 'Facebook không được bỏ trống',
					pattern: 'Link Facebook không đúng dạng',
				},
				skype: {
					required: 'Skype không được bỏ trống',
					pattern: 'Link Skype không đúng dạng',
				},
			},
		}
	);

	function handleSubmit() {
		check();
		updateInfo(form);
	}

	return (
		<div className="tab1">
			<label>
				<p>
					Họ và tên<span>*</span>
				</p>
				<input type="text" name="name" value={form.name} placeholder="Nguyễn Văn A" onChange={inputChange} />
				{error.name && <span className="error-text">{error.name}</span>}
			</label>
			<label>
				<p>
					Số điện thoại<span>*</span>
				</p>
				<input type="text" name="phone" value={form.phone} placeholder="0949******" onChange={inputChange} />
				{error.phone && <span className="error-text">{error.phone}</span>}
			</label>
			<label>
				<p>
					Email<span>*</span>
				</p>
				<input value={form.email} disabled type="text" />
			</label>
			<label>
				<p>
					Facebook<span>*</span>
				</p>
				<input type="text" name="fb" value={form.facebook} placeholder="Facebook url" onChange={inputChange} />
				{error.fb && <span className="error-text">{error.fb}</span>}
			</label>
			<label>
				<p>
					Skype<span>*</span>
				</p>
				<input type="text" name="skype" value={form.skype} placeholder="Skype url" onChange={inputChange} />
				{error.skype && <span className="error-text">{error.skype}</span>}
			</label>
			<div className="btn main rect" onClick={handleSubmit}>
				LƯU LẠI
			</div>
		</div>
	);
}
