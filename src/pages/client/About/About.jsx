import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="site-wrap">
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
                      <li className="active">
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
        className="site-blocks-cover overlay"
        style={{ backgroundImage: "url(/images/hero_bg_1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center text-center justify-content-center">
            <div className="col-md-8">
              <span className="sub-text">About Us</span>
              <h1>Learn More About NextGen</h1>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="img-border">
                <img
                  src="/images/about_1.png"
                  alt="About NextGen"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="sub-title">Our Story</span>
              <h2 className="font-weight-bold text-black mb-4">
                About NextGen Interior Design
              </h2>
              <p>
                NextGen Interior Design là công ty thiết kế nội thất hàng đầu
                với nhiều năm kinh nghiệm trong việc tạo ra những không gian
                sống và làm việc độc đáo, hiện đại.
              </p>
              <p>
                Chúng tôi chuyên về thiết kế nội thất cao cấp, tư vấn kiến trúc
                và cung cấp giải pháp hoàn chỉnh cho mọi dự án từ nhỏ đến lớn.
              </p>

              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="media custom-media">
                    <div className="mr-3 icon">
                      <span className="flaticon-interior-design display-4"></span>
                    </div>
                    <div className="media-body">
                      <h5 className="mt-0">Thiết kế sáng tạo</h5>
                      <p>Đội ngũ thiết kế giàu kinh nghiệm và sáng tạo</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media custom-media">
                    <div className="mr-3 icon">
                      <span className="flaticon-measuring display-4"></span>
                    </div>
                    <div className="media-body">
                      <h5 className="mt-0">Chất lượng cao</h5>
                      <p>Cam kết chất lượng và sự hài lòng của khách hàng</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span className="sub-title">Đội ngũ</span>
              <h2 className="font-weight-bold text-black">
                Gặp gỡ đội ngũ chuyên gia
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="testimony text-center">
                <img
                  src="/images/person_1.jpg"
                  alt="Team Member"
                  className="img-fluid rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h3 className="mt-3">Nguyễn Văn A</h3>
                <span className="sub-title">Giám đốc thiết kế</span>
                <p>
                  10+ năm kinh nghiệm trong lĩnh vực thiết kế nội thất cao cấp.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="testimony text-center">
                <img
                  src="/images/person_2.jpg"
                  alt="Team Member"
                  className="img-fluid rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h3 className="mt-3">Trần Thị B</h3>
                <span className="sub-title">Kiến trúc sư trưởng</span>
                <p>
                  Chuyên gia về kiến trúc nội thất và không gian sống hiện đại.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="testimony text-center">
                <img
                  src="/images/person_3.jpg"
                  alt="Team Member"
                  className="img-fluid rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h3 className="mt-3">Lê Văn C</h3>
                <span className="sub-title">Quản lý dự án</span>
                <p>
                  Đảm bảo mọi dự án được hoàn thành đúng tiến độ và chất lượng.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="testimony text-center">
                <img
                  src="/images/person_4.jpg"
                  alt="Team Member"
                  className="img-fluid rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h3 className="mt-3">Phạm Thị D</h3>
                <span className="sub-title">Tư vấn khách hàng</span>
                <p>
                  Hỗ trợ khách hàng từ ý tưởng ban đầu đến hoàn thiện dự án.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer border-top">
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

export default About;
