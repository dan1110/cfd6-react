import CourseList from '../../components/CourseList';
import { CourseOn, CourseOff } from './component';

export function Course() {
	// let [state, setState] = useState({ online: [], offline: [] });
	// useEffect(() => {
	// 	homeApi.home().then((res) => setState(res));
	// }, []);
	return (
		<main className="homepage" id="main">
			<CourseList />
		</main>
	);
}
