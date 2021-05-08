import {
    Action,
    Banner,
    CourseList,
    Different,
    Gallery,
    Testimonial,
} from "./component";

export function Home() {
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
