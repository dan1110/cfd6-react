import React, { useEffect, useState } from 'react';

export default function CountDown() {
	let [count, setCount] = useState(100);
	useEffect(() => {
		let title = document.title;
		console.log('aaaa');
		document.title = 'demo';
		return () => {
			console.log('destroy');
			document.title = title;
		};
	}, []);

	useEffect(() => {
		console.log('aaa');
		setTimeout(() => {
			setCount(count - 1);
		}, 1000);
	}, [count]);

	return <div style={{ margin: '200px auto', fontSize: 100 }}> {count} CountDown</div>;
}
