import React from "react";
import { Section1, Section2, Section3, Section4 } from "./component";

export default function CourseDetail() {
    return (
        <>
            <main className="course-detail" id="main">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </main>
        </>
    );
}
