import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import bannerImg from "../../img/banner/banner-image.png";

export default function Home() {
  return (
    <div id = "home" className="banner">
      <div className="container">
        <div className="row ">
          <div className=" flex-column gap-2 ps-5 d-flex left-side col-lg-6 col-md-12">
            <div className="d-flex gap-2 flex-column">
            <h2 className="greeting-text">Hello</h2>
            <h1 className="name">I am Yohannis</h1>
            <h3 className="role">Software Engineer</h3>
            </div>
            <div>
              
            </div>
            <div className="site-buttons  ">
              <div className="d-flex   flex-row gap-2 flex-wrap">
                <Button
                  variant="primary"
                  className="adv-button text-uppercase px-4 py-2"
                >
                  Hire Me
                </Button>
                <Button
                  variant="outline-primary"
                  className=" adv-button-sec text-uppercase px-4 py-2"
                >
                  Get CV
                </Button>
              </div>
            </div>
          </div>
          <div className=" col-lg-6 col-md-12">
            <img src={bannerImg} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
