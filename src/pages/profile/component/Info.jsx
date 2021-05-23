import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../../hook/useAuth';
import useFormValidate from '../../../hook/useFormValidate';
import homeApi from '../../../services/homeApi';
import profileApi from '../../../services/profileApi';

export function Info() {
	// let { data, updateInfo } = useAuth();
	// console.log(data);
	let { data } = useSelector((state) => state);
	let dispatch = useDispatch();
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
				facebook: {
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
				facebook: {
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

	async function handleSubmit() {
		let errorInput = check();
		// updateInfo(form);
		if (Object.keys(errorInput).length === 0) {
			let res = await profileApi.updateInfo(form);
			if (res?.data) {
				dispatch({
					type: 'UPDATE_INFO',
					payload: res.data,
				});
			}
		}
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
				<input
					type="text"
					name="facebook"
					value={form.facebook}
					placeholder="Facebook url"
					onChange={inputChange}
				/>
				{error.facebook && <span className="error-text">{error.facebook}</span>}
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
