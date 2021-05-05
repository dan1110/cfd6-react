import React from "react";
import Project from "./component/Project";

export default function ProjectPage() {
  return (
    <main className="projectpage" id="main">
      <section className="section-1">
        <div className="container">
          <h2 className="main-title">dự án</h2>
          <p className="top-des">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam
            tincidunt elementum sem non luctus
          </p>
          <div className="list row">
            <Project
              name="Kymco"
              makeby="Hoàn thành với Huỳnh Tiến Tài"
              srcImg="/img/project/project (2).jpg"
            />

            <Project
              name="Kymco"
              makeby="Hoàn thành với Huỳnh Tiến Tài"
              srcImg="/img/project/project (3).jpg"
            />

            <Project
              name="Kymco"
              makeby="Hoàn thành với Huỳnh Tiến Tài"
              srcImg="/img/project/project (4).jpg"
            />

            <Project
              name="Kymco"
              makeby="Hoàn thành với Huỳnh Tiến Tài"
              srcImg="/img/project/project (6).jpg"
            />

            <Project
              name="Kymco"
              makeby="Hoàn thành với Huỳnh Tiến Tài"
              srcImg="/img/project/project (2).jpg"
            />

            <Project
              name="Kymco"
              makeby="Hoàn thành với Huỳnh Tiến Tài"
              srcImg="/img/project/project (2).jpg"
            />
          </div>
          <div className="bottom">
            <div className="btn overlay round btn-more">tải thêm</div>
          </div>
        </div>
      </section>
    </main>
  );
}
