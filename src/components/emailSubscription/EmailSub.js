import React from "react";
import "./EmailSub.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EmailSub() {
  return (
    <div className="subscription ">
      <div className="container col-md-7 col-11  mb-5 d-flex flex-column gap-5 subscribe">
        <div className="row d-flex flex-column w-100  ">
          <div className="col title-sub text-center mt-5 pt-5">
            <h4 className="serv-off text-uppercase">
              Get update from anywhere
            </h4>
            <p className="para w-75 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto quisquam, molestiae accusantium.
            </p>
          </div>
          <div className="sub-form col mx-auto mt-4  d-flex gap-3 flex-column flex-sm-row align-items-center justify-content-center">
            <Form className="w-50">
              <Form.Group className="" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="email"
                  className="form-cont"
                  placeholder="name@example.com"
                />
              </Form.Group>
            </Form>
            <Button
              variant="secondary"
              className="sub-btn  px-4"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
