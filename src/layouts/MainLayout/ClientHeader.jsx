import React from "react";
import { Link, NavLink } from "react-router-dom";

const ClientHeader = () => {
  return (
    <>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      {/* Navbar */}
      <div className="site-navbar-wrap">
        <div className="site-navbar">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-2">
                <h1 className="mb-0 site-logo">
                  <a href="/">NextGen</a>
                </h1>
              </div>
              <div className="col-10">
                <nav className="site-navigation text-right" role="navigation">
                  <div className="container">
                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                      <a
                        href="#"
                        className="site-menu-toggle js-menu-toggle text-white"
                      >
                        <span className="icon-menu h3"></span>
                      </a>
                    </div>
                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/projects">Projects</NavLink>
                      </li>
                      <li>
                        <NavLink to="/news">News</NavLink>
                      </li>
                      <li>
                        <NavLink to="/services">Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Contact</NavLink>
                      </li>
                      <li>
                        <NavLink to="/admin">Admin</NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientHeader;
