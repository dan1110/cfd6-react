import React from 'react';

export default function Accor({ learn_date, content, title }) {
	return (
		<div className="accordion">
			<div className="accordion__title">
				<div className="date">{learn_date}</div>
				<h3>{title}</h3>
			</div>
			<div className="content">{content}</div>
		</div>
	);
}
