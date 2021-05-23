import React from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../../hook/useAuth';

export function TopInfo({}) {
	let { data } = useSelector((state) => state);

	return (
		<div className="top-info">
			<div className="avatar">
				{/* <span class="text">H</span> */}
				<img src={data?.avatar} alt="" />
				<div className="camera" />
			</div>
			<div className="name">{data?.name}</div>
			<p className="des">Thành viên của team CFD1-OFFLINE</p>
		</div>
	);
}
