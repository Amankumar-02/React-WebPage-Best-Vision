import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../../CustomCss.css'
import '../../Style.css'
import '../../ResponsiveStyle.css'
import arrow from '../../images/arrow.svg'
import aboutImg from '../../images/about/about-us.webp'
import team from '../../images/team/dummy.jpg'
import banner3 from '../../images/banner/Banner-1.jpg'
import service1 from '../../images/Services/web-designing.webp'

function About(){
    return(
        <>
        <section className="parallax parallax-main img1" style={{backgroundImage: `url(${banner3})`}}>
        <div className="services-wrapper wrapper">
            <div className="container-fluid px-lg-0">
                    <div className="row">
                        <div className="offset-lg-6 col-lg-6 offset-md-4 col-md-8 mb-5 mb-lg-0">
                            <div className="parallax parallax-1 img2" style={{backgroundImage: `url(${service1})`}}>
                                <div className="card black-card">
                                    <h3>About Us</h3>
                                    <h5>OUR SOLE GOAL IS TO BRING YOUR VISION TO LIFE, THROUGH OUR VAST EXPERIENCE, INNOVATION AND DEDICATION</h5>
                                    <p>Our team is here to assist you with all of your digital marketing needs, From Web Design and Branding, all the way to Advertisement</p>
                                    <a href="#" className="view-link">Contact Us <img src={arrow} alt="arrow" className="ms-4"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
        
                </div>
            </div>
        </section>
        <section className="bg-black wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-title">
                            <h1 className="text-white">WHO WE ARE</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 mb-5">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio quis voluptatum pariatur magnam tempore atque ducimus adipisci aliquam, nemo facilis impedit fugiat aperiam reprehenderit a qui ea corrupti? Alias! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio quis voluptatum pariatur magnam tempore atque ducimus adipisci aliquam, nemo facilis impedit fugiat aperiam reprehenderit a qui ea corrupti? Alias!</p> <br/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio quis voluptatum pariatur magnam tempore atque ducimus adipisci aliquam, nemo facilis impedit fugiat aperiam reprehenderit a qui ea corrupti? Alias</p>
                        </div>
                        <div className="col-md-5 mb-5">
                            <img src={aboutImg} alt="about-us" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="Capability-wrapper wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12"></div>
                    <div className="sec-title mb-5">
                        <h1>OUR CAPABILITIES</h1>
                        <p className="text-black fw-noraml">Everything You Need To Turn An Idea Into A Website</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-lg-3 mb-5">
                        <h3 className="text-black mb-4">Product</h3>
                        <p className="text-black">Strategy</p>
                        <p className="text-black">Audience Analysis</p>
                        <p className="text-black">Business Model Canvas</p>
                    </div>
                    <div className="col-6 col-lg-3 mb-5">
                        <h3 className="text-black mb-4">Design</h3>
                        <p className="text-black">Brand Identity</p>
                        <p className="text-black">UI/UX Research</p>
                        <p className="text-black">Visual Design</p>
                    </div>
                    <div className="col-6 col-lg-3 mb-5">
                        <h3 className="text-black mb-4">Development</h3>
                        <p className="text-black">Websites</p>
                        <p className="text-black">Internet of Things</p>
                        <p className="text-black">Emerging Tech & Labs</p>
                    </div>
                    <div className="col-6 col-lg-3 mb-5">
                        <h3 className="text-black mb-4">Growth</h3>
                        <p className="text-black">Digital Marketing</p>
                        <p className="text-black">Internet of Things</p>
                        <p className="text-black">Search Engine Optimization</p>
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
        <section className="team-wrapper wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-5">
                        <div className="sec-title mb-5">
                            <h1>OUR TEAM</h1>
                            <p className="text-black fw-noraml">A Proud Team Of Developers, Coders, Writers Whose Unbeatable Coordination Has Been Helping Business Survive For A Decade Now. We Inspire You To Aspire.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-3 mb-5">
                        <div className="card border-0 text-center">
                            <div className="team-img">
                                <img src={team} className="img-fluid" alt="dummy"/>
                            </div>
                            <div className="team-detail">
                                <h5>JOHN SMITH</h5>
                                <p>Frontend Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-5">
                        <div className="card border-0 text-center">
                            <div className="team-img">
                                <img src={team} className="img-fluid" alt="dummy"/>
                            </div>
                            <div className="team-detail">
                                <h5>JOHN SMITH</h5>
                                <p>Frontend Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-5">
                        <div className="card border-0 text-center">
                            <div className="team-img">
                                <img src={team} className="img-fluid" alt="dummy"/>
                            </div>
                            <div className="team-detail">
                                <h5>JOHN SMITH</h5>
                                <p>Frontend Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-5">
                        <div className="card border-0 text-center">
                            <div className="team-img">
                                <img src={team} className="img-fluid" alt="dummy"/>
                            </div>
                            <div className="team-detail">
                                <h5>JOHN SMITH</h5>
                                <p>Frontend Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-5">
                        <div className="card border-0 text-center">
                            <div className="team-img">
                                <img src={team} className="img-fluid" alt="dummy"/>
                            </div>
                            <div className="team-detail">
                                <h5>JOHN SMITH</h5>
                                <p>Frontend Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-5">
                        <div className="card border-0 text-center">
                            <div className="team-img">
                                <img src={team} className="img-fluid" alt="dummy"/>
                            </div>
                            <div className="team-detail">
                                <h5>JOHN SMITH</h5>
                                <p>Frontend Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-5">
                        <div className="card border-0 text-center">
                            <div className="team-img">
                                <img src={team} className="img-fluid" alt="dummy"/>
                            </div>
                            <div className="team-detail">
                                <h5>JOHN SMITH</h5>
                                <p>Frontend Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-5">
                        <div className="card border-0 text-center">
                            <div className="team-img">
                                <img src={team} className="img-fluid" alt="dummy"/>
                            </div>
                            <div className="team-detail">
                                <h5>JOHN SMITH</h5>
                                <p>Frontend Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About