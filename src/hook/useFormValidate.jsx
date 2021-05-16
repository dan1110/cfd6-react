import React, { useState } from 'react';

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
	namePattern =
		/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i,
	phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
	fbPattern = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/i,
	skyPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i,
	urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i;

export default function useFormValidate(initialForm, validate) {
	let [form, setForm] = useState(initialForm);
	let [error, setError] = useState({});

	function inputChange(e) {
		let name = e.target.name;
		let value = e.target.value;

		setForm({
			...form,
			[name]: value,
		});
	}

	function check() {
		let errorInput = {};

		let { rule, message } = validate;

		for (let i in rule) {
			let r = rule[i];
			let m = message[i] || {};

			if (r.required && !form[i]?.trim()) {
				errorInput[i] = m?.required || 'Không được để trống';
			}
			if (r.pattern && form[i]) {
				let { pattern } = r;
				if (pattern === 'email') pattern = emailPattern;
				if (pattern === 'phone') pattern = phonePattern;
				if (pattern === 'url') pattern = urlPattern;
				if (pattern === 'name') pattern = namePattern;
				if (pattern === 'fb') pattern = fbPattern;
				if (pattern === 'skype') pattern = skyPattern;

				if (!pattern?.test(form[i])) {
					errorInput[i] = m?.pattern || `Vui lòng nhập đúng định dạng`;
				}
			}
		}
		if (Object.keys(errorInput).length === 0) {
		}
		setError(errorInput);
		return error;
	}

return { form, error, setForm, inputChange, check };
}
