import './App.css'
import logo from "../assets/img/logo.webp"
import image1 from "../assets/img/about/about-square-10.webp"
import { useEffect, useState } from 'react';

function App() {

  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle(
      'mobile-nav-active',
      mobileNavActive
    );

    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [mobileNavActive]);


  return (
    <>

      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          <a href="/" className="logo d-flex align-items-center">
            <img src={logo} alt="Bermak" />
            <h1 className="sitename">Bermak</h1>
          </a>

          <nav id="navmenu" className="navmenu">

            <ul>
              <li>
                <a href="#hero" className="active">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#portfolio">Portfolio</a>
              </li>

              <li>
                <a href="#team">Team</a>
              </li>

              <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>

                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>

                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>

                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>

                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <i
              className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'
                }`}
              onClick={toggleMobileNav}
            ></i>

          </nav>

        </div>
      </header>


      <main className="main">


        <section id="hero" className="hero section light-background">

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1 data-aos="fade-up" data-aos-delay="200">Transform Your Business Vision Into Reality</h1>
                  <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                  <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">
                    <a href="#about" className="btn-primary">Get Started Today</a>
                    <a href="#https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn-secondary glightbox">
                      <i className="bi bi-play-circle"></i>
                      Watch Demo
                    </a>
                  </div>
                  <div className="hero-stats" data-aos="fade-up" data-aos-delay="500">
                    <div className="stat-item">
                      <div className="stat-number">500+</div>
                      <div className="stat-label">Successful Projects</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">98%</div>
                      <div className="stat-label">Client Satisfaction</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">10+</div>
                      <div className="stat-label">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-image" data-aos="fade-left" data-aos-delay="300">
                  <img src={image1} alt="Business Success" className="img-fluid" />
                  <div className="floating-card" data-aos="zoom-in" data-aos-delay="600">
                    <div className="card-icon">
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <div className="card-content">
                      <h5>Revenue Growth</h5>
                      <div className="growth-percentage">+45%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>

        <section id="about" className="about section">


          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">About</span>
            <h2>About Us</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                <div className="content">
                  <h2>Crafting Excellence Through Innovation and Dedication</h2>
                  <p className="lead">We are passionate professionals committed to delivering exceptional results that exceed expectations and drive meaningful transformation.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <div className="stats-row">
                    <div className="stat-item">
                      <div className="stat-number purecounter" data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1"></div>
                      <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number purecounter" data-purecounter-start="0" data-purecounter-end="850" data-purecounter-duration="1"></div>
                      <div className="stat-label">Projects Completed</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number purecounter" data-purecounter-start="0" data-purecounter-end="240" data-purecounter-duration="1"></div>
                      <div className="stat-label">Happy Clients</div>
                    </div>
                  </div>

                  <div className="cta-section">
                    <a href="#" className="btn-outline">Meet Our Team</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                <div className="image-wrapper">
                  <img src="assets/img/about/about-square-12.webp" alt="About us" className="img-fluid" />
                  <div className="floating-card" data-aos="zoom-in" data-aos-delay="500">
                    <div className="card-content">
                      <div className="icon">
                        <i className="bi bi-award"></i>
                      </div>
                      <div className="text">
                        <h4>Award Winning</h4>
                        <p>Recognized for excellence in our industry</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>


        <section id="services" className="services section">


          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">Services</span>
            <h2>What We Do Offer</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-5">

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <h3>Strategic Consulting</h3>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam.</p>
                  <a href="service-details.html" className="service-link">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="bi bi-palette"></i>
                  </div>
                  <h3>Brand Development</h3>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                  <a href="service-details.html" className="service-link">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <h3>Digital Solutions</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris vitae congue nulla. Proin eget tortor risus vestibulum.</p>
                  <a href="service-details.html" className="service-link">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="bi bi-megaphone"></i>
                  </div>
                  <h3>Marketing Strategy</h3>
                  <p>Vivamus magna justo lacinia eget consectetur sed convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
                  <a href="service-details.html" className="service-link">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3>Team Building</h3>
                  <p>Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                  <a href="service-details.html" className="service-link">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <h3>Data Analytics</h3>
                  <p>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh.</p>
                  <a href="service-details.html" className="service-link">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </section>


        <section id="why-us" className="why-us section">


          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">Why Us</span>
            <h2>Why Choose Us</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                <div className="content">
                  <h2>Why Partner With Us</h2>
                  <p>We deliver exceptional results through proven expertise, cutting-edge innovation, and unwavering commitment to your success. Our comprehensive approach ensures sustainable growth and competitive advantage.</p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                <div className="image-wrapper">
                  <img src="assets/img/about/about-8.webp" alt="Professional team collaboration" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="features-grid" data-aos="fade-up" data-aos-delay="400">
              <div className="row g-5">

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="feature-item">
                    <div className="icon-wrapper">
                      <i className="bi bi-lightbulb"></i>
                    </div>
                    <div className="feature-content">
                      <h3>Innovation Leadership</h3>
                      <p>We stay ahead of industry trends, implementing cutting-edge technologies and methodologies that drive transformational results for your business growth.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="feature-item">
                    <div className="icon-wrapper">
                      <i className="bi bi-award"></i>
                    </div>
                    <div className="feature-content">
                      <h3>Proven Expertise</h3>
                      <p>Our team brings decades of combined experience across multiple industries, ensuring strategic insights and tactical execution that delivers measurable outcomes.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="feature-item">
                    <div className="icon-wrapper">
                      <i className="bi bi-headset"></i>
                    </div>
                    <div className="feature-content">
                      <h3>24/7 Dedicated Support</h3>
                      <p>Round-the-clock availability with personalized attention from dedicated account managers who understand your unique challenges and objectives.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="feature-item">
                    <div className="icon-wrapper">
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <div className="feature-content">
                      <h3>Cost Efficiency</h3>
                      <p>Streamlined processes and intelligent resource allocation reduce overhead while maximizing ROI, delivering premium results within your budget parameters.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </section>


        <section id="portfolio" className="portfolio section">


          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">Portfolio</span>
            <h2>Check Our Portfolio</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
              <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
                <li data-filter="*" className="filter-active">All Work</li>
                <li data-filter=".filter-design">Digital Design</li>
                <li data-filter=".filter-development">Development</li>
                <li data-filter=".filter-strategy">Strategy</li>
                <li data-filter=".filter-consulting">Consulting</li>
              </ul>

              <div className="row gy-5 isotope-container" data-aos="fade-up" data-aos-delay="300">

                <div className="col-lg-12 portfolio-item isotope-item filter-design">
                  <article className="portfolio-card">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="project-visual">
                          <img src="assets/img/portfolio/portfolio-1.webp" alt="Enterprise Digital Platform" className="img-fluid" loading="lazy" />
                          <div className="project-overlay">
                            <div className="overlay-content">
                              <a href="assets/img/portfolio/portfolio-1.webp" className="view-project glightbox" aria-label="View project image">
                                <i className="bi bi-eye"></i>
                              </a>
                              <a href="#" className="project-link" aria-label="View project details">
                                <i className="bi bi-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="project-details">
                          <div className="project-header">
                            <span className="project-category">Digital Design</span>
                            <time className="project-year">2024</time>
                          </div>
                          <h3 className="project-title">Enterprise Digital Platform</h3>
                          <p className="project-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                          <div className="project-meta">
                            <span className="client-name">Fortune 500 Company</span>
                            <div className="project-scope">
                              <span className="scope-item">UX Design</span>
                              <span className="scope-item">Development</span>
                              <span className="scope-item">Strategy</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-12 portfolio-item isotope-item filter-development">
                  <article className="portfolio-card">
                    <div className="row g-4">
                      <div className="col-md-6 order-md-2">
                        <div className="project-visual">
                          <img src="assets/img/portfolio/portfolio-3.webp" alt="SaaS Product Suite" className="img-fluid" loading="lazy" />
                          <div className="project-overlay">
                            <div className="overlay-content">
                              <a href="assets/img/portfolio/portfolio-3.webp" className="view-project glightbox" aria-label="View project image">
                                <i className="bi bi-eye"></i>
                              </a>
                              <a href="#" className="project-link" aria-label="View project details">
                                <i className="bi bi-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 order-md-1">
                        <div className="project-details">
                          <div className="project-header">
                            <span className="project-category">Development</span>
                            <time className="project-year">2024</time>
                          </div>
                          <h3 className="project-title">SaaS Product Suite</h3>
                          <p className="project-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                          <div className="project-meta">
                            <span className="client-name">Tech Startup</span>
                            <div className="project-scope">
                              <span className="scope-item">Full Stack</span>
                              <span className="scope-item">Cloud Architecture</span>
                              <span className="scope-item">DevOps</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-12 portfolio-item isotope-item filter-strategy">
                  <article className="portfolio-card">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="project-visual">
                          <img src="assets/img/portfolio/portfolio-5.webp" alt="Brand Transformation" className="img-fluid" loading="lazy" />
                          <div className="project-overlay">
                            <div className="overlay-content">
                              <a href="assets/img/portfolio/portfolio-5.webp" className="view-project glightbox" aria-label="View project image">
                                <i className="bi bi-eye"></i>
                              </a>
                              <a href="#" className="project-link" aria-label="View project details">
                                <i className="bi bi-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="project-details">
                          <div className="project-header">
                            <span className="project-category">Strategy</span>
                            <time className="project-year">2023</time>
                          </div>
                          <h3 className="project-title">Brand Transformation</h3>
                          <p className="project-description">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          <div className="project-meta">
                            <span className="client-name">Global Corporation</span>
                            <div className="project-scope">
                              <span className="scope-item">Brand Strategy</span>
                              <span className="scope-item">Visual Identity</span>
                              <span className="scope-item">Guidelines</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-12 portfolio-item isotope-item filter-consulting">
                  <article className="portfolio-card">
                    <div className="row g-4">
                      <div className="col-md-6 order-md-2">
                        <div className="project-visual">
                          <img src="assets/img/portfolio/portfolio-6.webp" alt="Digital Transformation" className="img-fluid" loading="lazy" />
                          <div className="project-overlay">
                            <div className="overlay-content">
                              <a href="assets/img/portfolio/portfolio-6.webp" className="view-project glightbox" aria-label="View project image">
                                <i className="bi bi-eye"></i>
                              </a>
                              <a href="#" className="project-link" aria-label="View project details">
                                <i className="bi bi-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 order-md-1">
                        <div className="project-details">
                          <div className="project-header">
                            <span className="project-category">Consulting</span>
                            <time className="project-year">2024</time>
                          </div>
                          <h3 className="project-title">Digital Transformation</h3>
                          <p className="project-description">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div className="project-meta">
                            <span className="client-name">Healthcare Provider</span>
                            <div className="project-scope">
                              <span className="scope-item">Process Optimization</span>
                              <span className="scope-item">Technology Audit</span>
                              <span className="scope-item">Implementation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-12 portfolio-item isotope-item filter-design">
                  <article className="portfolio-card">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="project-visual">
                          <img src="assets/img/portfolio/portfolio-2.webp" alt="E-commerce Experience" className="img-fluid" loading="lazy" />
                          <div className="project-overlay">
                            <div className="overlay-content">
                              <a href="assets/img/portfolio/portfolio-2.webp" className="view-project glightbox" aria-label="View project image">
                                <i className="bi bi-eye"></i>
                              </a>
                              <a href="#" className="project-link" aria-label="View project details">
                                <i className="bi bi-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="project-details">
                          <div className="project-header">
                            <span className="project-category">Digital Design</span>
                            <time className="project-year">2024</time>
                          </div>
                          <h3 className="project-title">E-commerce Experience</h3>
                          <p className="project-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.</p>
                          <div className="project-meta">
                            <span className="client-name">Retail Brand</span>
                            <div className="project-scope">
                              <span className="scope-item">User Experience</span>
                              <span className="scope-item">Interface Design</span>
                              <span className="scope-item">Conversion Optimization</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-12 portfolio-item isotope-item filter-development">
                  <article className="portfolio-card">
                    <div className="row g-4">
                      <div className="col-md-6 order-md-2">
                        <div className="project-visual">
                          <img src="assets/img/portfolio/portfolio-4.webp" alt="Mobile Application" className="img-fluid" loading="lazy" />
                          <div className="project-overlay">
                            <div className="overlay-content">
                              <a href="assets/img/portfolio/portfolio-4.webp" className="view-project glightbox" aria-label="View project image">
                                <i className="bi bi-eye"></i>
                              </a>
                              <a href="#" className="project-link" aria-label="View project details">
                                <i className="bi bi-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 order-md-1">
                        <div className="project-details">
                          <div className="project-header">
                            <span className="project-category">Development</span>
                            <time className="project-year">2023</time>
                          </div>
                          <h3 className="project-title">Mobile Application</h3>
                          <p className="project-description">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
                          <div className="project-meta">
                            <span className="client-name">Financial Services</span>
                            <div className="project-scope">
                              <span className="scope-item">iOS Development</span>
                              <span className="scope-item">Android Development</span>
                              <span className="scope-item">API Integration</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

              </div>

            </div>

            <div className="portfolio-conclusion" data-aos="fade-up" data-aos-delay="400">
              <div className="conclusion-content">
                <h4>Ready to elevate your business?</h4>
                <p>Let's discuss how we can transform your digital presence and drive meaningful results for your organization.</p>
                <div className="conclusion-actions">
                  <a href="#contact" className="primary-action">
                    Start Conversation
                    <i className="bi bi-arrow-right"></i>
                  </a>
                  <a href="#portfolio" className="secondary-action">
                    View All Projects
                  </a>
                </div>
              </div>
            </div>

          </div>

        </section>


        <section id="team" className="team section">


          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">Team</span>
            <h2>Meet Our Team</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-5">

              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="team-member">
                  <div className="member-img">
                    <img src="assets/img/person/person-f-8.webp" className="img-fluid" alt="Sarah Johnson" loading="lazy" />
                  </div>
                  <div className="member-info">
                    <h4>Sarah Johnson</h4>
                    <span>Chief Executive Officer</span>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam.</p>
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="250">
                <div className="team-member">
                  <div className="member-img">
                    <img src="assets/img/person/person-m-12.webp" className="img-fluid" alt="Michael Chen" loading="lazy" />
                  </div>
                  <div className="member-info">
                    <h4>Michael Chen</h4>
                    <span>Chief Technology Officer</span>
                    <p>Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum tellus ac blandit elit eget tincidunt mauris.</p>
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-github"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="team-member">
                  <div className="member-img">
                    <img src="assets/img/person/person-f-3.webp" className="img-fluid" alt="Emily Rodriguez" loading="lazy" />
                  </div>
                  <div className="member-info">
                    <h4>Emily Rodriguez</h4>
                    <span>Creative Director</span>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque auctor.</p>
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-dribbble"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="350">
                <div className="team-member">
                  <div className="member-img">
                    <img src="assets/img/person/person-m-7.webp" className="img-fluid" alt="David Thompson" loading="lazy" />
                  </div>
                  <div className="member-info">
                    <h4>David Thompson</h4>
                    <span>Head of Operations</span>
                    <p>Curabitur arcu erat accumsan id imperdiet et porttitor at sem nulla facilisi mauris sit amet massa vitae tortor.</p>
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-facebook"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>


        <section id="testimonials" className="testimonials section">


          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">Testimonials</span>
            <h2>What They Say</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="testimonial-slider swiper init-swiper">
              {/* <script type="application/json" className="swiper-config">
                {
                  "loop": true,
                "speed": 600,
                "autoplay": {
                  "delay": 4000
          },
                "slidesPerView": 1,
                "spaceBetween": 30,
                "navigation": {
                  "nextEl": ".swiper-button-next",
                "prevEl": ".swiper-button-prev"
          },
                "breakpoints": {
                  "768": {
                  "slidesPerView": 2
            },
                "1200": {
                  "slidesPerView": 3
            }
          }
        }
              </script> */}



              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item" data-aos="zoom-in" data-aos-delay="200">
                    <div className="testimonial-header">
                      <img src="assets/img/person/person-f-12.webp" alt="Client" className="img-fluid" loading="lazy" />
                      <div className="rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                    <div className="testimonial-body">
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit sed eiusmod tempor.</p>
                    </div>
                    <div className="testimonial-footer">
                      <h5>Jessica Martinez</h5>
                      <span>UX Designer</span>
                      <div className="quote-icon">
                        <i className="bi bi-chat-quote-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item" data-aos="zoom-in" data-aos-delay="300">
                    <div className="testimonial-header">
                      <img src="assets/img/person/person-m-8.webp" alt="Client" className="img-fluid" loading="lazy" />
                      <div className="rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                    <div className="testimonial-body">
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa.</p>
                    </div>
                    <div className="testimonial-footer">
                      <h5>David Rodriguez</h5>
                      <span>Software Engineer</span>
                      <div className="quote-icon">
                        <i className="bi bi-chat-quote-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item" data-aos="zoom-in" data-aos-delay="400">
                    <div className="testimonial-header">
                      <img src="assets/img/person/person-f-6.webp" alt="Client" className="img-fluid" loading="lazy" />
                      <div className="rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                    <div className="testimonial-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.</p>
                    </div>
                    <div className="testimonial-footer">
                      <h5>Amanda Wilson</h5>
                      <span>Creative Director</span>
                      <div className="quote-icon">
                        <i className="bi bi-chat-quote-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="swiper-slide">
                  <div className="testimonial-item" data-aos="zoom-in" data-aos-delay="500">
                    <div className="testimonial-header">
                      <img src="assets/img/person/person-m-12.webp" alt="Client" className="img-fluid" loading="lazy" />
                      <div className="rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                    <div className="testimonial-body">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
                    </div>
                    <div className="testimonial-footer">
                      <h5>Ryan Thompson</h5>
                      <span>Business Analyst</span>
                      <div className="quote-icon">
                        <i className="bi bi-chat-quote-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="swiper-slide">
                  <div className="testimonial-item" data-aos="zoom-in" data-aos-delay="600">
                    <div className="testimonial-header">
                      <img src="assets/img/person/person-f-10.webp" alt="Client" className="img-fluid" loading="lazy" />
                      <div className="rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                    <div className="testimonial-body">
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                    </div>
                    <div className="testimonial-footer">
                      <h5>Rachel Chen</h5>
                      <span>Project Manager</span>
                      <div className="quote-icon">
                        <i className="bi bi-chat-quote-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="swiper-navigation">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>

            </div>

          </div>

        </section>


        <section id="contact" className="contact section light-background">

          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">Contact</span>
            <h2>Let's Connect</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5">

                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-chat-dots"></i>
                  </div>
                  <div className="info-content">
                    <h4>Let's Connect</h4>
                    <p>We're here to discuss your vision and explore how we can bring it to life together.</p>
                  </div>
                </div>

                <div className="contact-details">

                  <div className="detail-item">
                    <div className="detail-icon">
                      <i className="bi bi-envelope-open"></i>
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Email us</span>
                      <span className="detail-value">contact@example.com</span>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">
                      <i className="bi bi-telephone-outbound"></i>
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Call us</span>
                      <span className="detail-value">+1 (555) 432-8976</span>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Visit us</span>
                      <span className="detail-value">547 Madison Avenue<br />New York, NY 10022</span>
                    </div>
                  </div>

                </div>

              </div>

              <div className="col-lg-7">
                <div className="form-wrapper">
                  <div className="form-header">
                    <h3>Send us a message</h3>
                  </div>

                  <form action="forms/contact.php" method="post" className="php-email-form">

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input type="text" name="name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email Address</label>
                          <input type="email" name="email" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" name="subject" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="projectMessage">Message</label>
                      <textarea name="message" id="projectMessage"></textarea>
                    </div>

                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>

                    <button type="submit" className="submit-btn">
                      <span>Send Message</span>
                      <i className="bi bi-arrow-right"></i>
                    </button>

                  </form>

                </div>

              </div>

            </div>
          </div>

        </section>

      </main>

      <footer id="footer" className="footer dark-background">

        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Axis</span>
              </a>
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
              <div className="social-links d-flex mt-4">
                <a href=""><i className="bi bi-twitter-x"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Product Management</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <p className="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>

          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Axis</strong> <span>All Rights Reserved</span></p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> | <a href="https://bootstrapmade.com/tools/">DevTools</a>
          </div>
        </div>

      </footer>

    </>
  )
}

export default App
