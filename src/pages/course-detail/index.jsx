import React from "react";
import { Banner, Introduce, Course, ProjectCourse } from "./component";

export default function CourseDetail() {
  return (
    <>
      <main className="course-detail" id="main">
        <Banner />
        <Introduce />
        <ProjectCourse />
        <Course />
      </main>
    </>
  );
}
