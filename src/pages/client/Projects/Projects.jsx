import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="site-wrap">
      {/* Mobile Menu */}
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
        <div className="site-navbar-top">
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-6">
                <a href="#" className="p-2 pl-0">
                  <span className="icon-twitter"></span>
                </a>
                <a href="#" className="p-2 pl-0">
                  <span className="icon-facebook"></span>
                </a>
                <a href="#" className="p-2 pl-0">
                  <span className="icon-linkedin"></span>
                </a>
                <a href="#" className="p-2 pl-0">
                  <span className="icon-instagram"></span>
                </a>
              </div>
              <div className="col-6">
                <div className="d-flex ml-auto">
                  <a
                    href="#"
                    className="d-flex align-items-center ml-auto mr-4"
                  >
                    <span className="icon-phone mr-2"></span>
                    <span className="d-none d-md-inline-block">
                      youremail@domain.com
                    </span>
                  </a>
                  <a href="#" className="d-flex align-items-center">
                    <span className="icon-envelope mr-2"></span>
                    <span className="d-none d-md-inline-block">
                      +1 291 2830 302
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-navbar">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-2">
                <h1 className="mb-0 site-logo">
                  <Link to="/">NextGen</Link>
                </h1>
              </div>
              <div className="col-10">
                <nav className="site-navigation text-right" role="navigation">
                  <div className="container">
                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="active">
                        <Link to="/projects">Projects</Link>
                      </li>
                      <li>
                        <Link to="/news">News</Link>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/admin">Admin</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="site-blocks-cover overlay inner-page"
        style={{ backgroundImage: "url(/images/hero_bg_1.jpg)" }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <span className="sub-text">Các dự án của chúng tôi</span>
              <h1>Dự Án</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 project-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <h3 className="mb-0">
                <a href="#">Thiết kế căn hộ hiện đại</a>
              </h3>
              <span className="text-muted">Nội thất</span>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 project-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_2.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <h3 className="mb-0">
                <a href="#">Villa sang trọng</a>
              </h3>
              <span className="text-muted">Thiết kế</span>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 project-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_3.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <h3 className="mb-0">
                <a href="#">Văn phòng công ty</a>
              </h3>
              <span className="text-muted">Nội thất</span>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 project-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_4.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <h3 className="mb-0">
                <a href="#">Nhà hàng cao cấp</a>
              </h3>
              <span className="text-muted">Nội thất</span>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 project-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_5.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <h3 className="mb-0">
                <a href="#">Khách sạn boutique</a>
              </h3>
              <span className="text-muted">Thiết kế</span>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 project-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <h3 className="mb-0">
                <a href="#">Spa & Wellness</a>
              </h3>
              <span className="text-muted">Nội thất</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigation</h3>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/news">News</Link>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <a href="#">Membership</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Recent News</h3>
                <div className="block-25">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <a href="#" className="d-flex">
                        <figure className="image mr-4">
                          <img
                            src="/images/hero_bg_1.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                        <div className="text">
                          <span className="small text-uppercase date">
                            Sep 16, 2018
                          </span>
                          <h3 className="heading font-weight-light">
                            Lorem ipsum dolor sit amet consectetur elit
                          </h3>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className="d-flex">
                        <figure className="image mr-4">
                          <img
                            src="/images/hero_bg_1.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                        <div className="text">
                          <span className="small text-uppercase date">
                            Sep 16, 2018
                          </span>
                          <h3 className="heading font-weight-light">
                            Lorem ipsum dolor sit amet consectetur elit
                          </h3>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="mb-5">
                <h3 className="footer-heading mb-2">Subscribe Newsletter</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit minima
                  minus odio.
                </p>
                <form action="#" method="post">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control border-white text-white bg-transparent"
                      placeholder="Enter Email"
                      aria-label="Enter Email"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary"
                        type="button"
                        id="button-addon2"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Follow Us</h3>
                  <div>
                    <a href="#" className="pl-0 pr-3">
                      <span className="icon-facebook"></span>
                    </a>
                    <a href="#" className="pl-3 pr-3">
                      <span className="icon-twitter"></span>
                    </a>
                    <a href="#" className="pl-3 pr-3">
                      <span className="icon-instagram"></span>
                    </a>
                    <a href="#" className="pl-3 pr-3">
                      <span className="icon-linkedin"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                Copyright &copy; {new Date().getFullYear()} All rights reserved
                | NextGen Interior Design
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
