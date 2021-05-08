import React from "react";
// import { useParams } from "react-router";
import { Banner, Introduce, Course, ProjectCourse } from "./component";

export function CourseDetail() {

  //Dynamic router (URL param)
  // let param = useParams();
  // console.log(param);

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
