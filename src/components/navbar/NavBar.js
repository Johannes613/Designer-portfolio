import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../img/logo.png";
import Button from "react-bootstrap/Button";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={scrolled ? "nav-bar add-shadow" : "nav-bar"}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <AnchorLink
                href="#home"
                className="nav-link home "
                offset="50"
                duration={500}
              >
            <img className="logo-img" src={logo} alt="" />
              </AnchorLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-5">
              <AnchorLink
                href="#home"
                className="nav-link home "
                offset="50"
                duration={400}
              >
                Home
              </AnchorLink>
              <AnchorLink
                href="#about"
                className="nav-link"
                offset="50"
                duration={400}
              >
                About
              </AnchorLink>
              <AnchorLink
                href="#services"
                className="nav-link"
                offset="50"
                duration={400}
              >
                Services
              </AnchorLink>
              <AnchorLink
                href="#projects"
                className="nav-link"
                offset="50"
                duration={400}
              >
                Projects
              </AnchorLink>
              <AnchorLink
                href="#testimonials"
                className="nav-link"
                offset="50"
                duration={400}
              >
                Testimonials
              </AnchorLink>
            </Nav>

             <Button  variant="primary" className="contact-btns">
                Contact
              </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
