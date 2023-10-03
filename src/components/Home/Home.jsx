import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'
import '../../CustomCss.css'
import '../../Style.css'
import '../../ResponsiveStyle.css'
import banner1 from '../../images/banner/top-img 1.png'
import arrow from '../../images/arrow.svg'
import work1 from '../../images/work/1.webp'
import work2 from '../../images/work/2.webp'
import work3 from '../../images/work/3.webp'
import work4 from '../../images/work/4.webp'
import banner2 from '../../images/banner/banner.webp'
import banner3 from '../../images/banner/Banner-1.jpg'
import service1 from '../../images/Services/web-designing.webp'
import service2 from '../../images/Services/branding.webp'
import service3 from '../../images/Services/advertising.webp'
import service4 from '../../images/Services/seo.webp'

function Home(){
    return(
        <>
        <section className="banner-wrapper wrapper" style={{backgroundImage: `url(${banner2})`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mb-5 order-2 order-lg-1">
                    <h2 className="banner-title">
                        LET'S WORK TOGETHER TO <span><br className="d-none d-xl-block" />BRING YOUR VISION TO LIFE</span>
                    </h2>
                    <div className="banner-text">
                        <p>Best Vision is a renowned full service marketing agency based in Toronto, with the sole goal of
                            bringing your vision to life and helping your ideas grow.</p>
                        <p>Our main services consist of Web Design and Development, Branding, Social Media Marketing, and
                            Advertising. We offer solutions that are innovative and custom tailored for you and your
                            business.</p>
                        <p>Our main services consist of Web Design and Development, Branding, Social Media Marketing, and
                            Advertising. We offer solutions that are innovative and custom tailored for you and your
                            business.</p>
                        <p className="mt-5">Let's get started!</p>
                    </div>
                    <a href="./contact.html" className="main-btn btn mt-5">Request A Proposal</a>
                </div>
                <div className="col-lg-6 mb-5 order-1 order-lg-2">
                    <img src={banner1} alt="banner-1" className="img-fluid"/>
                </div>
            </div>
        </div>
    </section>
    <section className="parallax parallax-main img1" style={{backgroundImage: `url(${banner3})`}}>
        <div className="services-wrapper wrapper">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <div className="sec-title">
                            <h1>Discover <span>Solution</span></h1>.
                            <h4>For every business goal</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-lg-0">
                <div className="row">
                    <div className="offset-lg-6 col-lg-6 offset-md-4 col-md-8 mb-5 mb-lg-0">
                        <div className="parallax parallax-1 img2" style={{backgroundImage: `url(${service1})`}}>
                            <div className="card black-card">
                                <h3>WEBSITE DESIGN</h3>
                                <h5>DESIGNED WITH INNOVATION</h5>
                                <p>Our award-winning designers are here to create the perfect online presence for you. We bring experience as well as a design that stands out to all websites we create for brands both large and small.</p>
                                <a href="#" className="view-link">Learn More <img src={arrow} alt="arrow" className="ms-4"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 mb-5 mb-lg-0">
                        <div className="parallax img3" style={{backgroundImage: `url(${service2})`}}>
                            <div className="card black-card right">
                                <h3>BRANDING</h3>
                                <h5>STAND OUT AND SUCCEED</h5>
                                <p>Our award-winning designers are here to create the perfect online presence for you. We bring experience as well as a design that stands out to all websites we create for brands both large and small.</p>
                                <a href="#" className="view-link">Learn More <img src={arrow} alt="arrow" className="ms-4"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-6 col-lg-6 offset-md-4 col-md-8 mb-5 mb-lg-0">
                        <div className="parallax parallax-1 img4" style={{backgroundImage: `url(${service3})`}}>
                            <div className="card black-card">
                                <h3>ADVERTISING & CAMPAIGNS</h3>
                                <h5>PAY-PER-CLICK (PPC)</h5>
                                <p>Our award-winning designers are here to create the perfect online presence for you. We bring experience as well as a design that stands out to all websites we create for brands both large and small.</p>
                                <a href="#" className="view-link">Learn More <img src={arrow} alt="arrow" className="ms-4"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 mb-5 mb-lg-0">
                        <div className="parallax img5" style={{backgroundImage: `url(${service4})`}}>
                            <div className="card black-card right">
                                <h3>SOCIAL MEDIA MARKETING</h3>
                                <h5>CONTENT WITH MEASURABLE IMPACT</h5>
                                <p>Our award-winning designers are here to create the perfect online presence for you. We bring experience as well as a design that stands out to all websites we create for brands both large and small.</p>
                                <a href="#" className="view-link">Learn More <img src={arrow} alt="arrow" className="ms-4"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="process-wrapper wrapper">
        <div className="container">
            <div className="row mb-5">
                <div className="col-12">
                    <div className="sec-title"><h1>THE PROCESS</h1></div>
                </div>
                <div className="col-xl-4 col-md-6 mb-5">
                    <div className="d-flex align-items-center justify-content-center process-content">
                        <span>1</span>
                        <p>Explore our services and give us a call to consult what services are right for you</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 mb-5">
                    <div className="d-flex align-items-center justify-content-center process-content">
                        <span>2</span>
                        <p>Explore our services and give us a call to consult what services are right for you</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 mb-5">
                    <div className="d-flex align-items-center justify-content-center process-content">
                        <span>3</span>
                        <p>Explore our services and give us a call to consult what services are right for you</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="work-wrapper wrapper pt-0">
        <div className="container">
            <div className="row mb-5">
                <div className="col-12">
                    <div className="sec-title">
                        <h1>OUR LATEST WORKS</h1>
                        <p>Brand Vision is proud to work with businesses from many industries</p>
                        <a href="#" className="view-link">View More <img src={arrow} alt="arrow" className="ms-4"/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid px-lg-0">
            <div className="row">
                <div className="col-sm-6 p-0">
                    <img src={work1} alt="work-1" className="img-fluid"/>
                </div>
                <div className="col-sm-6 p-0">
                    <img src={work2} alt="work-2" className="img-fluid"/>
                </div>
                <div className="col-sm-6 p-0">
                    <img src={work3} alt="work-3" className="img-fluid"/>
                </div>
                <div className="col-sm-6 p-0">
                    <img src={work4} alt="work-4" className="img-fluid"/>
                </div>
                <div className="col-12 text-center mt-5 pt-5">
                    <a href="#" className="main-btn">See More</a>
                </div>
            </div>
        </div>
    </section>
    <section className="testimonial-wrapper wrapper">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 text-lg-end">
                    <h2>WHAT OUR <br className="d-lg-block d-none"/>
                        CLIENTS SAY</h2>
                </div>
                <div className="col-xl-5 col-lg-6">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="card">
                                <p>“You guys rocked on our Social media & Website Project, Thank you Team for doing Such a Great Job ..”</p>
                                <div className="title py-5">
                                    <h5>David James</h5>
                                    <h5>Director</h5>
                                </div>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="card">
                                <p>“You guys rocked on our Social media & Website Project, Thank you Team for doing Such a Great Job ..”</p>
                                <div className="title py-5">
                                    <h5>Crise Jhon</h5>
                                    <h5>Managing Director</h5>
                                </div>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="card">
                                <p>“You guys rocked on our Social media & Website Project, Thank you Team for doing Such a Great Job ..”</p>
                                <div className="title py-5">
                                    <h5>Tom Cruse</h5>
                                    <h5>Executive Manager</h5>
                                </div>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Home