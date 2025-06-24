import { Link } from "react-router-dom";

const News = () => {
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
                      <li>
                        <Link to="/projects">Projects</Link>
                      </li>
                      <li className="active">
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
              <span className="sub-text">Cập nhật</span>
              <h1>Tin Tức &amp; Blogs</h1>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4 col-md-6 mb-5 post-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <span className="text-muted d-block mb-1">23 Tháng 6, 2024</span>
              <h3>
                <a href="#">
                  Xu hướng thiết kế nội thất 2024: Minimalism và Sustainability
                </a>
              </h3>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 post-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_2.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <span className="text-muted d-block mb-1">20 Tháng 6, 2024</span>
              <h3>
                <a href="#">
                  Cách tối ưu hóa không gian nhỏ với thiết kế thông minh
                </a>
              </h3>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 post-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_3.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <span className="text-muted d-block mb-1">18 Tháng 6, 2024</span>
              <h3>
                <a href="#">
                  Màu sắc và ánh sáng: Bí quyết tạo không gian sống ấm cúng
                </a>
              </h3>
            </div>

            <div className="col-lg-4 col-md-6 mb-5 post-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_4.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <span className="text-muted d-block mb-1">15 Tháng 6, 2024</span>
              <h3>
                <a href="#">
                  Thiết kế văn phòng hiện đại: Productivity meets Aesthetics
                </a>
              </h3>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 post-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_5.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <span className="text-muted d-block mb-1">12 Tháng 6, 2024</span>
              <h3>
                <a href="#">
                  Smart Home Integration: Công nghệ trong thiết kế nội thất
                </a>
              </h3>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 post-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <span className="text-muted d-block mb-1">10 Tháng 6, 2024</span>
              <h3>
                <a href="#">
                  Kinh nghiệm lựa chọn nội thất cho căn hộ chung cư
                </a>
              </h3>
            </div>
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="site-block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
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
                            Jun 23, 2024
                          </span>
                          <h3 className="heading font-weight-light">
                            Xu hướng thiết kế nội thất 2024
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
                            Jun 20, 2024
                          </span>
                          <h3 className="heading font-weight-light">
                            Tối ưu hóa không gian nhỏ
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
                            Jun 18, 2024
                          </span>
                          <h3 className="heading font-weight-light">
                            Màu sắc và ánh sáng trong nội thất
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
                  Đăng ký nhận tin tức mới nhất về thiết kế nội thất và xu hướng
                  trang trí.
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

export default News;
