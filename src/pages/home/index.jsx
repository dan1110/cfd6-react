import Action from "./component/Action";
import Banner from "./component/Banner";
import CourseList from "./component/CourseList";
import Different from "./component/Different";
import Gallery from "./component/Gallery";
import Testimonial from "./component/Testimonial";

export default function Home() {
    return (
        <main className="homepage" id="main">
            <Banner />
            <CourseList />
            <Different />
            <Testimonial />
            <Gallery />
            <Action />
        </main>
    );
}
