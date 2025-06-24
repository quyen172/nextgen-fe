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
          <div className="container tw-py-6 tw-flex tw-items-center tw-justify-between">
            <Link to="/" className="!tw-text-white tw-text-4xl tw-font-normal">
              Interior
            </Link>

            <form
              action=""
              className="tw-w-[300px] tw-h-12 tw-border tw-border-solid tw-border-[#BDBDBD] tw-flex"
            >
              <input
                type="text"
                placeholder="Search"
                className="tw-bg-transparent tw-border-none tw-outline-none tw-flex-1 tw-px-2 tw-text-white [&::placeholder]:tw-text-gray-[#BDBDBD]"
              />

              <div className="tw-text-white tw-self-center tw-mx-4">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </form>

            <ul className="tw-flex tw-items-center tw-gap-6 tw-list-none tw-m-0">
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
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>

            <div className="tw-flex tw-items-center tw-gap-6">
              <div className="tw-text-white tw-text-xl">
                <i class="fa-regular fa-heart"></i>
              </div>

              <div className="tw-text-white tw-text-xl">
                <i class="fa-regular fa-user"></i>
              </div>

              <Link to="/cart" className="tw-text-white tw-text-xl">
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientHeader;
