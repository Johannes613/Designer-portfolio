import React from "react";
import "./Footer.css";
import logo from "../../img/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="footer">
      <div className="containe d-flex flex-column align-items-center gap-3">
        <div className="row mx-auto">
          <div className="col">
            <AnchorLink
              href="#home"
              className="nav-link home "
              offset="50"
              duration={500}
            >
              <img className="logo-img" src={logo} alt="" />
            </AnchorLink>{" "}
          </div>
        </div>
        <h5 className="text-uppercase mt-2">Follow me</h5>
        <div className="social-media d-flex gap-4">
          <button className="btn rounded-circle ">
            <a href="https://github.com/Johannes613">
              <FiGithub className="icons" />
            </a>
          </button>
          <button className="btn rounded-circle ">
            <a href="https://www.linkedin.com/in/yohannis-adamu-1837832b9">
              <SlSocialLinkedin className="icons" />
            </a>
          </button>
          <button className="btn rounded-circle ">
            <a href="https://www.facebook.com/share/162Qps5sq2/?mibextid=wwXIfr">
              <FaFacebookF className="icons" />
            </a>
          </button>
          <button className="btn rounded-circle ">
            <CiTwitter className="icons" />
          </button>
        </div>
        <p>Copyright &#169; 2024 All Rights Resevered</p>
      </div>
    </div>
  );
}
