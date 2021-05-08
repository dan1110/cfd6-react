import { useHistory } from 'react-router';

export default function useDeLayLink() {
	const history = useHistory();

	function deLayLink(e) {
		e.preventDefault();
		let href = e.currentTarget.getAttribute('href');
		setTimeout(() => {
			history.push(href);
		}, 1000);
		document.body.classList.remove('menu-is-show');
	}
	return deLayLink;
}
