import React from "react";
import "./MyBrand.css";
import { brandsList } from "./BrandsList";
import { FaPhoneAlt } from "react-icons/fa";

export default function MyBrand() {
  return (
    <div className="my-brand">
      <div className="container-fluid">
        <div className="row d-flex mx-auto align-items-center justify-content-center">
          <div className="col-lg-6 d-flex mx-auto align-items-center justify-content-center">
            <div className="row brand-list gx-5 gy-2">
              {brandsList.map((eachBrand) => {
                return (
                  <div className="col-lg-4 col-sm-6" key={eachBrand.id}>
                    <div className="each-brand">
                      <img src={eachBrand.img_url} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-6 right">
            <div className="experience mx-auto">
              <div className="d-flex flex-row gap-3">
                <h2 className="years">10</h2>
                <h2 className="exp-head">
                  <span>Years of</span>
                  <span>Experience</span>
                  <span>Working</span>
                </h2>
              </div>
            </div>
            <div className="call-area mx-auto pt-5 d-flex gap-4 align-self-start me-auto">
              <span>
                <FaPhoneAlt className="phone-icon" />
              </span>
              <div className="call-now d-flex flex-column">
                <a href="#" className="text-uppercase text-decoration-none">
                  Call Now
                </a>
                <p>(+971 543948653)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
