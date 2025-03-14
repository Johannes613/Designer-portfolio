import React, { useState } from "react";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import { ProjectList } from "./ProjectsList";

export default function Projects() {
  const [currCat, setCurrCat] = useState("all");

  const handleCategory = (val) => {
    setCurrCat(val);
  };

  return (
    <div id="projects" className="projects">
      <div className="container px-5">
        <div className="row">
          <div className="col mt-5 pt-5">
            <h1 className="project-heading text-uppercase">
              Recently Completed Projects <span>Quality Work</span>
            </h1>
          </div>
        </div>

        <div className="filters mt-5">
          <button onClick={() => handleCategory("all")} className="each-filter">
            All
          </button>
          <button
            onClick={() => handleCategory("popular")}
            className="each-filter"
          >
            Popular
          </button>
          <button
            onClick={() => handleCategory("latest")}
            className="each-filter"
          >
            Latest
          </button>
          <button
            onClick={() => handleCategory("following")}
            className="each-filter"
          >
            Following
          </button>
          <button
            onClick={() => handleCategory("upcoming")}
            className="each-filter"
          >
            Upcoming
          </button>
        </div>
        <div className="row">
          {ProjectList.filter(
            (each_proj) => currCat == "all" || currCat === each_proj.category
          ).map((each_proj) => {
            return (
              <div
                className={"col-lg-4 col-md-6 mt-5 pt-3 proj-tit"}
                key={each_proj.id}
              >
                <Card className="each-proj d-flex flex-column gap-1 mx-auto">
                  <Card.Img
                    variant="top"
                    src={each_proj.img_url}
                    className="project-img"
                  />
                  <Card.Body className="d-flex flex-column gap-1">
                    <Card.Title className="serv-title text-uppercase">
                      {each_proj.project_name}
                    </Card.Title>
                    <Card.Text className="proj-desc">
                      {each_proj.category}, Project
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
