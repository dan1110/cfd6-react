import React, { useState } from 'react';

export function Info() {
	const [infoForm, setInfoForm] = useState({
		name: '',
		phone: '',
		fb: '',
		skype: '',
	});
	const [error, setError] = useState({
		name: '',
		phone: '',
		fb: '',
		skype: '',
	});

	function handleChangeInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		setInfoForm({
			...infoForm,
			[name]: value,
		});
	}

	function handleSubmit() {
		// console.log(infoForm);
		let errorInput = {};
		if (!infoForm.name.trim()) {
			errorInput.name = 'Vui lòng nhập tên';
		}
		if (infoForm.phone && !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(infoForm.phone)) {
			errorInput.phone = 'Số điện thoại không đúng định dạng';
		}
		if (!infoForm.phone.trim()) {
			errorInput.phone = 'Vui lòng nhập số điện thoại';
		}
		if (!infoForm.fb.trim()) {
			errorInput.fb = 'Vui lòng nhập link facebook';
		}
		if (
			infoForm.fb &&
			!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(infoForm.fb)
		) {
			errorInput.fb = 'Link Facebook không đúng định dạng';
		}
		if (!infoForm.skype.trim()) {
			errorInput.skype = 'Vui lòng nhập link skype';
		}
		if (
			infoForm.skype &&
			!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(infoForm.skype)
		) {
			errorInput.skype = 'Link Skype không đúng định dạng';
		}

		setError(errorInput);
		if (Object.keys(errorInput).length === 0) {
			console.log(infoForm);
		}
	}

	return (
		<div className="tab1">
			<label>
				<p>
					Họ và tên<span>*</span>
				</p>
				<input
					type="text"
					name="name"
					value={infoForm.name}
					placeholder="Nguyễn Văn A"
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
					name="phone"
					value={infoForm.phone}
					placeholder="0949******"
					onChange={handleChangeInput}
				/>
				{error.phone && <span className="error-text">{error.phone}</span>}
			</label>
			<label>
				<p>
					Email<span>*</span>
				</p>
				<input defaultValue="vuong.dang@dna.vn" disabled type="text" />
			</label>
			<label>
				<p>
					Facebook<span>*</span>
				</p>
				<input
					type="text"
					name="fb"
					value={infoForm.fb}
					placeholder="Facebook url"
					onChange={handleChangeInput}
				/>
				{error.fb && <span className="error-text">{error.fb}</span>}
			</label>
			<label>
				<p>
					Skype<span>*</span>
				</p>
				<input
					type="text"
					name="skype"
					value={infoForm.skype}
					placeholder="Skype url"
					onChange={handleChangeInput}
				/>
				{error.skype && <span className="error-text">{error.skype}</span>}
			</label>
			<div className="btn main rect" onClick={handleSubmit}>
				LƯU LẠI
			</div>
		</div>
	);
}
