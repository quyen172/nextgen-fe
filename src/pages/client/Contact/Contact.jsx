import { Link } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Initialize carousel for testimonials
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery(".nonloop-block-13").owlCarousel({
        center: false,
        items: 1,
        loop: false,
        stagePadding: 0,
        margin: 20,
        nav: true,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">',
        ],
        responsive: {
          600: {
            margin: 20,
            items: 2,
          },
          1000: {
            margin: 20,
            items: 3,
          },
        },
      });
    }
  }, []);

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
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li className="active">
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
              <span className="sub-text">Liên hệ với chúng tôi</span>
              <h1>Liên Hệ</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h2 className="site-heading text-black mb-5">
                Nói <strong>Xin chào</strong>
              </h2>

              <form action="#" className="p-5 bg-white">
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold" htmlFor="fullname">
                      Họ và Tên
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      className="form-control"
                      placeholder="Họ và tên đầy đủ"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Địa chỉ email"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="phone">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="message">
                      Tin nhắn
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      className="form-control"
                      placeholder="Hãy chia sẻ với chúng tôi về dự án của bạn"
                    ></textarea>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="Gửi tin nhắn"
                      className="btn btn-primary rounded-0 btn-lg"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container site-section block-13 testimonial-wrap">
        <div className="row">
          <div className="col-12 text-center">
            <span className="sub-title">Khách hàng hài lòng</span>
            <h2 className="font-weight-bold text-black mb-5">Testimonials</h2>
          </div>
        </div>

        <div className="nonloop-block-13 owl-carousel">
          <div className="testimony">
            <img src="/images/person_1.jpg" alt="Image" className="img-fluid" />
            <h3>Cloe Marena</h3>
            <span className="sub-title">Chủ sở hữu công ty xây dựng</span>
            <p>
              &ldquo;
              <em>
                NextGen đã thiết kế lại văn phòng của chúng tôi một cách tuyệt
                vời. Không gian làm việc trở nên hiện đại và thoải mái hơn rất
                nhiều.
              </em>
              &rdquo;
            </p>
          </div>

          <div className="testimony">
            <img src="/images/person_2.jpg" alt="Image" className="img-fluid" />
            <h3>Nathalie Channie</h3>
            <span className="sub-title">Giám đốc khách sạn</span>
            <p>
              &ldquo;
              <em>
                Dịch vụ thiết kế nội thất khách sạn của NextGen thật sự ấn
                tượng. Khách hàng của chúng tôi đều rất hài lòng với không gian
                mới.
              </em>
              &rdquo;
            </p>
          </div>

          <div className="testimony">
            <img src="/images/person_3.jpg" alt="Image" className="img-fluid" />
            <h3>Will Turner</h3>
            <span className="sub-title">Chủ nhà hàng</span>
            <p>
              &ldquo;
              <em>
                Nhà hàng của tôi đã được NextGen thiết kế lại hoàn toàn. Doanh
                thu tăng đáng kể nhờ không gian ấm cúng và sang trọng.
              </em>
              &rdquo;
            </p>
          </div>

          <div className="testimony">
            <img src="/images/person_4.jpg" alt="Image" className="img-fluid" />
            <h3>Nicolas Stainer</h3>
            <span className="sub-title">Chủ căn hộ</span>
            <p>
              &ldquo;
              <em>
                Căn hộ của gia đình tôi được NextGen thiết kế với phong cách
                hiện đại, tối ưu hóa không gian một cách thông minh.
              </em>
              &rdquo;
            </p>
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
                <h3 className="footer-heading mb-4">Thông tin liên hệ</h3>
                <div className="block-25">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="mr-3 icon">
                          <span className="icon-location-pin"></span>
                        </div>
                        <div className="text">
                          <span className="small">Địa chỉ:</span>
                          <h3 className="heading font-weight-light">
                            123 Đường ABC, Quận 1, TP.HCM
                          </h3>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="mr-3 icon">
                          <span className="icon-phone"></span>
                        </div>
                        <div className="text">
                          <span className="small">Điện thoại:</span>
                          <h3 className="heading font-weight-light">
                            (+84) 123 456 789
                          </h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="mb-5">
                <h3 className="footer-heading mb-2">Subscribe Newsletter</h3>
                <p>
                  Đăng ký nhận tin tức và ưu đãi mới nhất từ NextGen Interior
                  Design.
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

export default Contact;
