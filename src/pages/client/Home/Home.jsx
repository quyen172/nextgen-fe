import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    if (window.AOS) {
      window.AOS.init();
    }

    // Initialize carousel if needed
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
                      <li className="has-children active">
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
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center text-center justify-content-center">
            <div className="col-md-8">
              <span className="sub-text">Interior Design Company</span>
              <h1>Experience Interior Design</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="site-block-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <a
                href="#"
                className="site-block-feature d-flex p-4 rounded mb-4"
              >
                <div className="mr-3">
                  <span className="icon flaticon-window font-weight-light h2"></span>
                </div>
                <div className="text">
                  <h3>Interior Architecture</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a
                href="#"
                className="site-block-feature d-flex p-4 rounded mb-4"
              >
                <div className="mr-3">
                  <span className="icon flaticon-measuring font-weight-light h2"></span>
                </div>
                <div className="text">
                  <h3>Interior Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a
                href="#"
                className="site-block-feature d-flex p-4 rounded mb-4"
              >
                <div className="mr-3">
                  <span className="icon flaticon-interior-design font-weight-light h2"></span>
                </div>
                <div className="text">
                  <h3>Furniture</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="site-section border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <div className="media custom-media">
                <div className="mr-3 icon">
                  <span className="flaticon-interior-design display-4"></span>
                </div>
                <div className="media-body">
                  <h5 className="mt-0">Creative Solutions</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin..
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <div className="media custom-media">
                <div className="mr-3 icon">
                  <span className="flaticon-step-ladder display-4"></span>
                </div>
                <div className="media-body">
                  <h5 className="mt-0">Design Interior</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin..
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <div className="media custom-media">
                <div className="mr-3 icon">
                  <span className="flaticon-turned-off display-4"></span>
                </div>
                <div className="media-body">
                  <h5 className="mt-0">Intuitive Design</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="img-border">
                <img
                  src="/images/img_3.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-5 ml-auto">
              <span className="sub-title">Why Us</span>
              <h2 className="font-weight-bold text-black mb-5">Why Us</h2>
              <div className="accordion" id="accordionExample">
                <h2 className="mb-0 border rounded mb-2">
                  <button
                    className="btn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    1. What Should I Do If My Interior Broken?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet,{" "}
                      <a href="#">Consectetur adipisicing</a> elit. Eos quos
                      incidunt, perspiciatis, ad saepe, magnam error adipisci
                      vitae ut provident alias!
                    </p>
                  </div>
                </div>

                <h2 className="mb-0 border rounded mb-2">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    2. What Is Your Location?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat voluptate animi hic quasi sequi odio, vitae
                      dolorum soluta sapiente debitis.
                    </p>
                  </div>
                </div>

                <h2 className="mb-0 border rounded mb-2">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    3. Robust Building
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsum et dolorum libero consequuntur facere molestias
                      beatae quod labore quidem ad quasi.
                    </p>
                  </div>
                </div>

                <h2 className="mb-0 border rounded mb-2">
                  <button
                    className="btn collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    4. What Is Your Main Services?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eos quos incidunt, perspiciatis, ad saepe, magnam error
                      adipisci vitae ut provident alias!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container site-section block-13 testimonial-wrap">
        <div className="row">
          <div className="col-12 text-center">
            <span className="sub-title">Happy Clients</span>
            <h2 className="font-weight-bold text-black mb-5">Testimonials</h2>
          </div>
        </div>
        <div className="nonloop-block-13 owl-carousel">
          <div className="testimony">
            <img src="/images/person_1.jpg" alt="Image" className="img-fluid" />
            <h3>Cloe Marena</h3>
            <span className="sub-title">Owner of Building Co.</span>
            <p>
              &ldquo;
              <em>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium non eligendi totam natus ullam cumque!
              </em>
              &rdquo;
            </p>
          </div>
          <div className="testimony">
            <img src="/images/person_2.jpg" alt="Image" className="img-fluid" />
            <h3>Nathalie Channie</h3>
            <span className="sub-title">Owner of Building Co.</span>
            <p>
              &ldquo;
              <em>
                Eveniet, laboriosam impedit facilis. Voluptatem, repudiandae
                eligendi maiores sunt itaque, dolores voluptas labore
                perferendis.
              </em>
              &rdquo;
            </p>
          </div>
          <div className="testimony">
            <img src="/images/person_3.jpg" alt="Image" className="img-fluid" />
            <h3>Will Turner</h3>
            <span className="sub-title">Owner of Building Co.</span>
            <p>
              &ldquo;
              <em>
                Laboriosam nisi natus quos soluta blanditiis iste in distinctio
                fugiat perferendis, architecto eveniet provident.
              </em>
              &rdquo;
            </p>
          </div>
          <div className="testimony">
            <img src="/images/person_4.jpg" alt="Image" className="img-fluid" />
            <h3>Nicolas Stainer</h3>
            <span className="sub-title">Owner of Building Co.</span>
            <p>
              &ldquo;
              <em>
                Voluptatibus sed vero corporis reiciendis, ducimus iste aliquam
                doloribus voluptas nam quo assumenda.
              </em>
              &rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="site-section site-block-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="img-border">
                <img
                  src="/images/img_2.jpg"
                  alt="Image"
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
                      <h3>Pool Decor</h3>
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
                      <h3>Seat Decor</h3>
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
                      <h3>Intuitive Idea</h3>
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
                      <h3>Decorations</h3>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="sub-title">News &amp; Update</span>
              <h2 className="font-weight-bold text-black mb-5">
                Our Blog Posts
              </h2>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 post-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <span className="text-muted d-block mb-2">23, January 2019</span>
              <h3>
                <a href="#">
                  Architecture is ready to take the world to the next level
                </a>
              </h3>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 post-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_2.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <span className="text-muted d-block mb-2">23, January 2019</span>
              <h3>
                <a href="#">
                  Architecture is ready to take the world to the next level
                </a>
              </h3>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 post-entry">
              <a href="#" className="d-block figure">
                <img
                  src="/images/img_3.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
              <span className="text-muted d-block mb-2">23, January 2019</span>
              <h3>
                <a href="#">
                  Architecture is ready to take the world to the next level
                </a>
              </h3>
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-12">
              <p>
                <a href="#" className="btn btn-primary btn-lg rounded-0">
                  View All Posts
                </a>
              </p>
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

export default Home;
