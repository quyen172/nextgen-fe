import { Link } from "react-router-dom";

const Services = () => {
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
                      <li>
                        <Link to="/news">News</Link>
                      </li>
                      <li className="active">
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
              <span className="sub-text">Dịch vụ tuyệt vời của chúng tôi</span>
              <h1>Dịch Vụ</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="media custom-media">
                <div className="mr-3 icon">
                  <span className="flaticon-interior-design display-4"></span>
                </div>
                <div className="media-body">
                  <h5 className="mt-0">Giải pháp sáng tạo</h5>
                  Chúng tôi cung cấp những giải pháp thiết kế độc đáo và sáng
                  tạo, phù hợp với nhu cầu và phong cách sống của từng khách
                  hàng.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="media custom-media">
                <div className="mr-3 icon">
                  <span className="flaticon-step-ladder display-4"></span>
                </div>
                <div className="media-body">
                  <h5 className="mt-0">Thiết kế nội thất</h5>
                  Dịch vụ thiết kế nội thất hoàn chỉnh từ concept đến thi công,
                  đảm bảo chất lượng và tiến độ theo cam kết.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="media custom-media">
                <div className="mr-3 icon">
                  <span className="flaticon-turned-off display-4"></span>
                </div>
                <div className="media-body">
                  <h5 className="mt-0">Thiết kế thông minh</h5>
                  Ứng dụng công nghệ smart home và tối ưu hóa không gian để tạo
                  ra môi trường sống tiện nghi và hiện đại.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="media custom-media">
                <div className="mr-3 icon">
                  <span className="flaticon-window display-4"></span>
                </div>
                <div className="media-body">
                  <h5 className="mt-0">Tư vấn kiến trúc</h5>
                  Đội ngũ kiến trúc sư giàu kinh nghiệm tư vấn và thiết kế kiến
                  trúc nội thất phù hợp với từng không gian.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="media custom-media">
                <div className="mr-3 icon">
                  <span className="flaticon-measuring display-4"></span>
                </div>
                <div className="media-body">
                  <h5 className="mt-0">Quản lý dự án</h5>
                  Quản lý toàn bộ dự án từ khâu thiết kế đến thi công, đảm bảo
                  tiến độ và chất lượng theo yêu cầu khách hàng.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="media custom-media">
                <div className="mr-3 icon">
                  <span className="flaticon-sit-down display-4"></span>
                </div>
                <div className="media-body">
                  <h5 className="mt-0">Bảo hành & Bảo trì</h5>
                  Dịch vụ bảo hành và bảo trì sau bàn giao, đảm bảo chất lượng
                  công trình luôn được duy trì ở mức tốt nhất.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="site-section site-block-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="img-border">
                <img
                  src="/images/img_5.jpg"
                  alt="NextGen Services"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row row-items">
                <div className="col-6">
                  <a
                    href="#"
                    className="d-flex text-center feature active p-4 mb-4 bg-white"
                  >
                    <span className="align-self-center w-100">
                      <span className="d-block mb-3">
                        <span className="flaticon-step-ladder display-3"></span>
                      </span>
                      <h3>Thiết kế hồ bơi</h3>
                    </span>
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="#"
                    className="d-flex text-center feature active p-4 mb-4 bg-white"
                  >
                    <span className="align-self-center w-100">
                      <span className="d-block mb-3">
                        <span className="flaticon-sit-down display-3"></span>
                      </span>
                      <h3>Nội thất ghế ngồi</h3>
                    </span>
                  </a>
                </div>
              </div>
              <div className="row row-items last">
                <div className="col-6">
                  <a
                    href="#"
                    className="d-flex text-center feature active p-4 mb-4 bg-white"
                  >
                    <span className="align-self-center w-100">
                      <span className="d-block mb-3">
                        <span className="flaticon-turned-off display-3"></span>
                      </span>
                      <h3>Ý tưởng thông minh</h3>
                    </span>
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="#"
                    className="d-flex text-center active feature active p-4 mb-4 bg-white"
                  >
                    <span className="align-self-center w-100">
                      <span className="d-block mb-3">
                        <span className="flaticon-window display-3"></span>
                      </span>
                      <h3>Trang trí</h3>
                    </span>
                  </a>
                </div>
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
                <h3 className="footer-heading mb-4">Dịch vụ chính</h3>
                <div className="block-25">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#" className="d-flex">
                        <span className="icon-arrow_right mr-2"></span>
                        <span>Thiết kế nội thất căn hộ</span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="d-flex">
                        <span className="icon-arrow_right mr-2"></span>
                        <span>Thiết kế văn phòng</span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="d-flex">
                        <span className="icon-arrow_right mr-2"></span>
                        <span>Thiết kế nhà hàng - khách sạn</span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="d-flex">
                        <span className="icon-arrow_right mr-2"></span>
                        <span>Thi công nội thất</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="mb-5">
                <h3 className="footer-heading mb-2">Liên hệ tư vấn</h3>
                <p>
                  Liên hệ ngay với chúng tôi để được tư vấn miễn phí về dự án
                  thiết kế nội thất của bạn.
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

export default Services;
