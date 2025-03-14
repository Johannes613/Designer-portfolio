import React from "react";
import "./Testimonial.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials } from "./TestimonialsList";

export default function Testimonial({ deviceType }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1500, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="testimonials" className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col title-serv text-center mt-5 pt-5">
            <h2 className="serv-off text-uppercase">Clients Say About Me</h2>
            <p className="para w-75 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto quisquam, molestiae accusantium iusto soluta nesciunt
              fuga aliquid eligendi deserunt ut.
            </p>
          </div>
        </div>
        

        <div className="row col-12 col-lg-10 my-5  mx-auto">
          <Carousel
            responsive={responsive}
            className="carousel"
            infinite={true}
            autoPlay={false}
            showDots={true}
            dotListClass="custom-dot-list-style"
            removeArrowOnDeviceType={["tablet", "desktop"]}
            ssr={true} // means to render carousel on server-side.
          >
            {testimonials.map((each_test) => {
              return (
                <div className="each-test d-flex p-3 gap-4 align-items-center justify-content-around">
                  <img src={each_test.image} alt="" />
                  <div className="test-desc">
                    <h5 className="text-uppercase">{each_test.name}</h5>
                    <p>{each_test.feedback}</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
