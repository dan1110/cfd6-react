import React, { useEffect } from 'react';

export default function CountDown() {
	useEffect(() => {
		let title = document.title;
		console.log('aaaa');
		document.title = 'demo';
		return () => {
			console.log('destroy');
			document.title = title;
		};
	}, []);

	return <div style={{ margin: '200px auto', fontSize: 100 }}>CountDown</div>;
}
