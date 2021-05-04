import { Header, Footer } from "./components";
import Nav from "./components/Nav";
import Overlay from "./components/Overlay";
import CourseDetail from "./pages/course-detail";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Project from "./pages/project";

function App() {
    return (
        <>
            <Header />
            <CourseDetail />
            <Footer />
        </>
    );
}

export default App;
