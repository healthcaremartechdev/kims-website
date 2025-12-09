"use client"

import { useEffect, useState } from "react";

import getStaticText from "@/helper/getStaticText";

const SocialMedia = ({socialWidgetID}) => {
    const [staticTexts, setStaticTexts] = useState({});
    const [widgetID, setWidgetID] = useState(socialWidgetID || "elfsight-app-ee9a0b8c-7785-49ab-be28-50eff9d278a3");
    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);

    useEffect(() => {
        // Load Elfsight script once the component is mounted
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        script.defer = true;  // ← Add this
        script.onload = () => {
            // Script loaded
        };

        document.body.appendChild(script);

        // Cleanup if necessary
        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-between" data-aos="fade-right">
                        <div className="col-md-4 col-8">
                            <div className="main-heading">
                                <h2> {staticTexts['Social Media Updates']} </h2>
                            </div>
                        </div>
                        {/* <div className="col-md-2 col-4">
                            <div className="over-all-btn text-end">
                                <a href="#">{staticTexts['View All']} <span><img src="img/slider-right-arrow.svg" className="img-fluid"
                                    alt="" /></span></a>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="media-card" data-aos="fade-right" data-aos-duration="2200" data-aos-delay="100">
                                <div className="media-img">
                                    <a href="#">
                                        <img src="img/media1.jpg" className="img-fluid w-100" alt="" />
                                    </a>
                                </div>
                                <div className="media-content">
                                    <p>At KIMSHEALTH, we believe in the power of prevention.Join us in recognizing National</p>
                                    <div className="media-border-bottom">
                                        <div className="d-flex align-items-center justify-content-between mt-3">
                                            <div className="media-name">
                                                <div>
                                                    <img src="img/kims-small-logo.png" className="img-fluid" alt="" />
                                                </div>
                                                <p>KIMSHEALTH <br /> 10th June 2024</p>
                                            </div>
                                            <div className="media-social">
                                                <img src="img/facebook.svg" className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <div className="media-heart">
                                            <div>
                                                <p><span> <img src="img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                            </div>
                                            <img src="img/chat.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="media-share">
                                            <p><span> <img src="img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="media-card" data-aos="fade-right" data-aos-duration="1800" data-aos-delay="100">
                                <div className="media-img">
                                    <a href="#">
                                        <img src="img/media2.jpg" className="img-fluid w-100" alt="" />
                                    </a>
                                </div>
                                <div className="media-content">
                                    <p>At KIMSHEALTH, our Cardiology Department specializes in electrophysiology, accurately </p>
                                    <div className="media-border-bottom">
                                        <div className="d-flex align-items-center justify-content-between mt-3">
                                            <div className="media-name">
                                                <div>
                                                    <img src="img/kims-small-logo.png" className="img-fluid" alt="" />
                                                </div>
                                                <p>KIMSHEALTH <br /> 10th June 2024</p>
                                            </div>
                                            <div className="media-social">
                                                <img src="img/facebook.svg" className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <div className="media-heart">
                                            <div>
                                                <p><span> <img src="img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                            </div>
                                            <img src="img/chat.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="media-share">
                                            <p><span> <img src="img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="media-card" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100">
                                <div className="media-img">
                                    <a href="#">
                                        <img src="img/media3.jpg" className="img-fluid w-100" alt="" />
                                    </a>
                                </div>
                                <div className="media-content">
                                    <p>Happy #DoctorsDay to all the amazing doctors who keep us healthy! Your dedication is a gift to our</p>
                                    <div className="media-border-bottom">
                                        <div className="d-flex align-items-center justify-content-between mt-3">
                                            <div className="media-name">
                                                <div>
                                                    <img src="img/kims-small-logo.png" className="img-fluid" alt="" />
                                                </div>
                                                <p>KIMSHEALTH <br /> 10th June 2024</p>
                                            </div>
                                            <div className="media-social">
                                                <img src="img/facebook.svg" className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <div className="media-heart">
                                            <div>
                                                <p><span> <img src="img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                            </div>
                                            <img src="img/chat.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="media-share">
                                            <p><span> <img src="img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="media-card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                                <div className="media-img">
                                    <a href="#">
                                        <img src="img/media4.jpg" className="img-fluid w-100" alt="" />
                                    </a>
                                </div>
                                <div className="media-content">
                                    <p>Don't let scoliosis go unnoticed. Look out for signs like uneven shoulders, a visible spine curve, or</p>
                                    <div className="media-border-bottom">
                                        <div className="d-flex align-items-center justify-content-between mt-3">
                                            <div className="media-name">
                                                <div>
                                                    <img src="img/kims-small-logo.png" className="img-fluid" alt="" />
                                                </div>
                                                <p>KIMSHEALTH <br /> 10th June 2024</p>
                                            </div>
                                            <div className="media-social">
                                                <img src="img/facebook.svg" className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <div className="media-heart">
                                            <div>
                                                <p><span> <img src="img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                            </div>
                                            <img src="img/chat.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="media-share">
                                            <p><span> <img src="img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div> */}

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                            <div className={widgetID} data-elfsight-app-lazy></div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <section className="section d-lg-none d-block" data-aos="fade-up">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4 col-8">
                            <div className="main-heading">
                                <h2>Social Media Updates </h2>
                            </div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="over-all-btn text-end">
                                <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                    alt="" /></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="row g-2">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                            <div className="media-card">
                                <div className="media-img">
                                    <a href="#">
                                        <img src="/img/media1.jpg" className="img-fluid w-100" alt="" />
                                    </a>
                                </div>
                                <div className="media-content">
                                    <p>At KIMSHEALTH, we believe in the power of prevention.Join us in recognizing National</p>
                                    <div className="media-border-bottom">
                                        <div className="d-flex align-items-center justify-content-between mt-3">
                                            <div className="media-name">
                                                <div>
                                                    <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                                </div>
                                                <p>KIMSHEALTH <br /> 10th June 2024</p>
                                            </div>
                                            <div className="media-social">
                                                <img src="/img/facebook.svg" className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <div className="media-heart">
                                            <div>
                                                <p><span> <img src="/img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                            </div>
                                            <img src="/img/chat.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="media-share">
                                            <p><span> <img src="/img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                            <div className="media-card">
                                <div className="media-img">
                                    <a href="#">
                                        <img src="/img/media2.jpg" className="img-fluid w-100" alt="" />
                                    </a>
                                </div>
                                <div className="media-content">
                                    <p>At KIMSHEALTH, our Cardiology Department specializes in electrophysiology, accurately</p>
                                    <div className="media-border-bottom">
                                        <div className="d-flex align-items-center justify-content-between mt-3">
                                            <div className="media-name">
                                                <div>
                                                    <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                                </div>
                                                <p>KIMSHEALTH <br /> 10th June 2024</p>
                                            </div>
                                            <div className="media-social">
                                                <img src="/img/facebook.svg" className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <div className="media-heart">
                                            <div>
                                                <p><span> <img src="/img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                            </div>
                                            <img src="/img/chat.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="media-share">
                                            <p><span> <img src="/img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section> */}
        </>
    )
}

export default SocialMedia;
