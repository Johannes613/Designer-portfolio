import React from "react";
import "./Services.css";
import Card from "react-bootstrap/Card";
import { servicesList } from "./ServicesList";

export default function Services() {
  return (
    <div id = "services" className="services">
      <div className="container">
        <div className="row">
          <div className="col title-serv text-center mt-5 pt-5">
            <h2 className="serv-off text-uppercase">Services We Offer</h2>
            <p className="para w-75 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto quisquam, molestiae accusantium iusto soluta nesciunt
              fuga aliquid eligendi deserunt ut.
            </p>
          </div>
        </div>

        <div className="row serv-lists d-flex mx-auto align-items-center justify-content-center">
          {servicesList.map((each_serv) => {
            return (
              <div className="col-lg-3 col-md-6 text-center mb-5 d-flex mx-auto align-items-center justify-content-center " key={each_serv.id}>
                <Card className="each-serv d-flex flex-column gap-3 py-3 px-2" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={each_serv.img_url}
                    className="card-img"
                  />
                  <Card.Body className="d-flex flex-column gap-3">
                    <Card.Title className="serv-title text-uppercase">{each_serv.title}</Card.Title>
                    <Card.Text>{each_serv.detail}</Card.Text>
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
