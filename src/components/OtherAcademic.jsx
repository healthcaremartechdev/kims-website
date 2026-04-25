"use client"
import { useEffect, useState } from "react";
import AcademicGalleryViewer from "./AcademicGalleryViewer";
import { marked } from "marked";

const OtherAcademic = ({ pageContent, baseUrl, highlight }) => {
    const [drpValue, setDrpValue] = useState('');

    useEffect(() => {
        if (highlight === "rank-holder") {
            setDrpValue("3")
        }
        else if (highlight === "skill") {
            setDrpValue("5")
        }
        else if (highlight === "international-training") {
            setDrpValue("6")
        }
        else if (highlight === "research") {
            setDrpValue("7")
        }
        else if (highlight === "alumini") {
            setDrpValue("8")
        }

    }, []);

    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="sticky-left">
                            <div className="find-doctor-left-col">
                                <div className="row">
                                    <div className="tab-group d-md-block d-none text-center mb-3 main-heading sub-heading main-list">
                                        <h3 className="text-start">Department of Academics</h3>
                                        <button type="button" className="btn-tab treat-tab py-3 "
                                            onClick={() => window.location.href = `${baseUrl}/academic?tab=about`}>
                                            About Academics
                                        </button>

                                        <button type="button" className="btn-tab treat-tab py-3"
                                            onClick={() => window.location.href = `${baseUrl}/academic?tab=leader`}>
                                            Academic Leaders
                                        </button>
                                        <button type="button" className={`${highlight === "alumini" ? 'active' : ''} btn-tab treat-tab py-3`}
                                            onClick={() => window.location.href = `${baseUrl}/our-alumini`}>
                                            Alumni
                                        </button>

                                        <button type="button" className="btn-tab treat-tab py-3"
                                            onClick={() => window.location.href = `${baseUrl}/academic?tab=course`}>
                                            Courses We Offer
                                        </button>

                                        <button type="button" className={`${highlight === "rank-holder" ? 'active' : ''} btn-tab treat-tab py-3`}
                                            onClick={() => window.location.href = `${baseUrl}/rank-holders`}>
                                            Rank Holders
                                        </button>

                                        <button type="button" className="btn-tab treat-tab py-3 omega4"
                                            onClick={() => window.location.href = `${baseUrl}/academic?tab=publication`}>
                                            Scientific Publications
                                        </button>
                                        <button type="button" className={`${highlight === "skill" ? 'active' : ''} btn-tab treat-tab py-3`}
                                            onClick={() => window.location.href = `${baseUrl}/skills-and-simulation-lab`}>
                                            Skills & Simulation Lab
                                        </button>
                                        <button type="button" className={`${highlight === "international-training" ? 'active' : ''} btn-tab treat-tab py-3`}
                                            onClick={() => window.location.href = `${baseUrl}/international-training-programs`}>
                                            International Training
                                        </button>
                                        <button type="button" className={`${highlight === "research" ? 'active' : ''} btn-tab treat-tab py-3`}
                                            onClick={() => window.location.href = `${baseUrl}/outstanding-research-work`}>
                                            Research Work
                                        </button>
                                        <button type="button" className="btn-tab treat-tab py-3 omega9"
                                            onClick={() => window.location.href = `${baseUrl}/academic?tab=gallery`}>
                                            Gallery
                                        </button>
                                    </div>
                                    <div className="visa-select d-md-none d-block">
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            value={drpValue}
                                            onChange={(e) => {
                                                let value = e.target.value;
                                                if (value === '3')
                                                    window.location.href = `${baseUrl}/rank-holders`
                                                else if (value === '5')
                                                    window.location.href = `${baseUrl}/skills-and-simulation-lab`
                                                else if (value === '6')
                                                    window.location.href = `${baseUrl}/international-training-programs`
                                                else if (value === '7')
                                                    window.location.href = `${baseUrl}/outstanding-research-work`
                                                else if (value === '8')
                                                    window.location.href = `${baseUrl}/our-alumini`
                                                else
                                                    window.location.href = `${baseUrl}/academic?tab=${e.target.value}`

                                            }}>
                                            <option value="about">About Academic</option>
                                            <option value="leader">Academic Leaders</option>
                                            <option value="8">Alumni</option>
                                            <option value="course">Courses We Offer</option>
                                            <option value="3">Rank Holders</option>
                                            <option value="publication">Scientific Publications</option>
                                            <option value="5">Skills & Simulation Lab</option>
                                            <option value="6">International Training</option>
                                            <option value="7">Research Work</option>
                                            <option value="gallery">Gallery</option>
                                        </select>
                                    </div>
                                </div>

                                {/* <div className="find-doc-box d-md-block d-none">
                                    <VisaMedicalForm title={pageContent[5]?.title} />
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9 expert-section">
                        <div className="treat-box" id="omega" style={{ display: "block" }}>

                            {/* Rank Holder */}
                            {
                                highlight === "rank-holder" && (
                                    <div className="container main-heading sub-heading main-list">
                                        <h2>{pageContent[0]?.title}</h2>
                                        <section className="section expert-section pt-0">
                                            <div className="container">
                                                <div className="row">
                                                    {
                                                        pageContent[1].contentCard.map((d, i) => {
                                                            return <div className="col-md-4 col-6 mb-4" key={i}>
                                                                <div className="expert-card" data-aos="fade-right">
                                                                    <div className="card border-0 p-lg-4 p-0">
                                                                        <div className="card-top">
                                                                            <img src={d.image?.url ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${d.image.url}` : '/img/no-image.jpg'}
                                                                                className="img-fluid w-100" alt={d.title} />
                                                                        </div>
                                                                        <div className="card-content">
                                                                            <h4>{d.title}</h4>
                                                                            <span style={{ fontSize: "14px" }}>{d.details}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                )
                            }

                            {/* Skill Lab */}
                            {
                                highlight === "skill" && (
                                    <div className="container main-heading sub-heading main-list">
                                        <h2>{pageContent[0]?.title}</h2>
                                        <section className="section pt-0">
                                            <div className="container">
                                                <div className="main-heading">
                                                    <h2>{pageContent[1].title}</h2>
                                                </div>
                                                <div className="main-heading sub-heading main-list">
                                                    <div
                                                        dangerouslySetInnerHTML={{ __html: marked(pageContent[1]?.details) || "" }}
                                                    >
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <div className="line-divider"></div>
                                        <section className="section">
                                            <div className="container">
                                                <div className="main-heading">
                                                    <h2>{pageContent[2].title}</h2>
                                                </div>
                                                <div className="main-heading sub-heading main-list">
                                                    <div
                                                        dangerouslySetInnerHTML={{ __html: marked(pageContent[2]?.details) || "" }}
                                                    >
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                )
                            }

                            {/* International  Training */}
                            {
                                highlight === "international-training" && (
                                    <div className="container main-heading sub-heading main-list">
                                        <h2>{pageContent[0]?.title}</h2>
                                        <section className="section pt-0">
                                            <div className="container">
                                                <div className="main-heading sub-heading main-list">
                                                    <div
                                                        dangerouslySetInnerHTML={{ __html: marked(pageContent[1]?.details) || "" }}
                                                    >
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                )
                            }

                            {/* Research work */}
                            {
                                highlight === "research" && (
                                    <div className="container main-heading sub-heading main-list">
                                        <h2>{pageContent[0]?.title}</h2>
                                        <section className="section pt-0">
                                            <div className="container">
                                                <div className="main-heading sub-heading main-list">
                                                    <div
                                                        className='table-responsive hear-associations-table'
                                                        dangerouslySetInnerHTML={{ __html: marked(pageContent[1]?.details) || "" }}
                                                    >
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                )
                            }



                            {/* Alumini */}
                            {
                                highlight === "alumini" && (
                                    <div className="kims-alumini-page">

                                        {/* <!-- MAIN --> */}
                                        <main className="kims-alumini-main">

                                            {/* <!-- HERO --> */}
                                            <section className="kims-alumini-hero">
                                                <div className="kims-alumini-hero-left">
                                                    <span className="kims-alumini-badge"><span className="kims-alumini-dot"></span>KIMSHEALTH Alumni Association</span>
                                                    <h2>Once a <em>KIMSian</em>,<br />always a KIMSian.</h2>
                                                    <p>Reconnect with your batchmates, mentors and the institution that shaped your clinical journey. Register today to stay informed about reunions, CMEs and alumni initiatives across the KIMSHEALTH network.</p>
                                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScLV5LqIMi0H95KaMdTUiv8dC2s6K7pDOaQRAc_u7pkerIR2g/viewform" target="_blank" rel="noopener" className="kims-alumini-hero-cta">
                                                        Register as Alumni <span className="kims-alumini-arrow">→</span>
                                                    </a>
                                                    <a href="#" className="kims-alumini-hero-sub-cta">Learn more</a>
                                                </div>
                                                <div className="kims-alumini-hero-mark overflow-hidden" aria-hidden="true">
                                                    {/* <div className="kims-alumini-kmark"></div> */}
                                                    <img src="/img/1000069285.jpeg" alt="KIMSHEALTH Alumni" className="img-fluid" />
                                                </div>
                                            </section>

                                            {/* <!-- STATS --> */}
                                            <section className="kims-alumini-stats">
                                                <div className="kims-alumini-stat"><div className="kims-alumini-num">1,200+</div><div className="kims-alumini-lbl">Alumni Worldwide</div></div>
                                                <div className="kims-alumini-stat"><div className="kims-alumini-num">35+</div><div className="kims-alumini-lbl">Countries</div></div>
                                                <div className="kims-alumini-stat"><div className="kims-alumini-num">25</div><div className="kims-alumini-lbl">Years of Legacy</div></div>
                                                <div className="kims-alumini-stat"><div className="kims-alumini-num">40+</div><div className="kims-alumini-lbl">Specialties</div></div>
                                            </section>

                                            {/* <!-- WRITEUP + ASIDE --> */}
                                            <section className="kims-alumini-content-row">
                                                <article className="kims-alumini-card kims-alumini-writeup">
                                                    <div className="kims-alumini-eyebrow">KIMSHEALTH</div>
                                                    <div className="kims-alumini-section-title"><span className="kims-alumini-bar"></span><h2>Alumni Association (KAA)</h2></div>
                                                    <p>The KIMSHEALTH Alumni Association (KAA) is a dedicated platform that fosters lifelong connections among postgraduates and fellows, promoting a strong sense of institutional identity and collaboration. It aims to build an active network of trained specialists across diverse disciplines, encouraging mentorship, knowledge exchange, and career guidance for current trainees. KAA will support continuing medical education, research initiatives, and academic engagement, contributing to the growth of both alumni and the institution. By aligning alumni efforts with the vision of KIMS Health, the association aspires to create a vibrant, globally connected community committed to excellence, innovation, and leadership in healthcare.</p>
                                                    <div className="d-lg-block d-none">
                                                        <div className="kims-alumini-pillars">
                                                            <div className="kims-alumini-pillar"><div className="kims-alumini-ic">✦</div><div><b>CME &amp; Research</b><span>Access ongoing academic programmes and publications.</span></div></div>
                                                            <div className="kims-alumini-pillar"><div className="kims-alumini-ic">✦</div><div><b>Reunions</b><span>Annual and batch-wise alumni meets across chapters.</span></div></div>
                                                            <div className="kims-alumini-pillar"><div className="kims-alumini-ic">✦</div><div><b>Mentorship</b><span>Guide the next generation of KIMSHEALTH trainees.</span></div></div>
                                                        </div>
                                                    </div>

                                                    <div className="d-lg-none d-block">
                                                        <div className="kims-alumini-pillars">
                                                            <div className="kims-alumini-pillar"><div className="kims-alumini-ic">✦</div><div><b>CME &amp; Research</b><span>Access ongoing academic programmes and publications.</span></div></div>
                                                            <div className="kims-alumini-pillar"><div className="kims-alumini-ic">✦</div><div><b>Reunions</b><span>Annual and batch-wise alumni meets across chapters.</span></div></div>
                                                            <div className="kims-alumini-pillar"><div className="kims-alumini-ic">✦</div><div><b>Mentorship</b><span>Guide the next generation of KIMSHEALTH trainees.</span></div></div>
                                                        </div>

                                                    </div>
                                                </article>

                                                <aside className="kims-alumini-aside">
                                                    <div>
                                                        <div className="kims-alumini-eyebrow">Get in touch</div>
                                                        <h3>Alumni Relations Office</h3>
                                                    </div>

                                                    <div>
                                                        <div className="kims-alumini-contact-item">
                                                            <div className="kims-alumini-ic"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg></div>
                                                            <div>
                                                                <div className="kims-alumini-lbl">Email</div>
                                                                <div className="kims-alumini-val">alumni@kimsglobal.com</div>
                                                            </div>
                                                        </div>
                                                        <div className="kims-alumini-contact-item">
                                                            <div className="kims-alumini-ic"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.5 0 .9.4.9.9V20c0 .5-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.5c.5 0 .9.4.9.9 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.2 1.8z" /></svg></div>
                                                            <div>
                                                                <div className="kims-alumini-lbl">Phone</div>
                                                                <div className="kims-alumini-val">+91 471 294 1000</div>
                                                            </div>
                                                        </div>
                                                        <div className="kims-alumini-contact-item">
                                                            <div className="kims-alumini-ic"><svg viewBox="0 0 24 24"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg></div>
                                                            <div>
                                                                <div className="kims-alumini-lbl">Office</div>
                                                                <div className="kims-alumini-val">Academics Department, VFive Building, KIMSHEALTH</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScLV5LqIMi0H95KaMdTUiv8dC2s6K7pDOaQRAc_u7pkerIR2g/viewform" target="_blank" rel="noopener" className="kims-alumini-aside-cta">Register as Alumni →</a>
                                                </aside>
                                            </section>

                                            {/* <!-- BEARERS --> */}
                                            <article className="kims-alumini-card kims-alumini-bearers">
                                                <div className="kims-alumini-bearers-head">
                                                    <div>
                                                        <div className="kims-alumini-eyebrow">KIMSHEALTH ALUMNI ASSOCIATION (KAA)</div>
                                                        <div className="kims-alumini-section-title"><span className="kims-alumini-bar"></span><h2>Office Bearers</h2></div>
                                                    </div>
                                                    <div className="kims-alumini-right">
                                                        <button className="kims-alumini-filter kims-alumini-active">Executive</button>
                                                        <button className="kims-alumini-filter">Council</button>
                                                        <button className="kims-alumini-filter">Chapter Heads</button>
                                                    </div>
                                                </div>
                                                <div className="kims-alumini-bearers-grid">
                                                    <div className="kims-alumini-bearer">
                                                        <div className="kims-alumini-photo">
                                                            <img src="/img/alumni/1-Shameem A.jpg" alt="Dr. Shameem A" />
                                                        </div>
                                                        <div className="kims-alumini-info">
                                                            <p className="kims-alumini-name">Dr. Shameem A</p>
                                                            <p className="kims-alumini-role">President</p>
                                                            <p className="kims-alumini-meta">Critical Care Physician</p>
                                                        </div>
                                                    </div>

                                                    <div className="kims-alumini-bearer">
                                                        <div className="kims-alumini-photo">
                                                            <img src="/img/alumni/2-KrishnaSree KS.jpg" alt="Dr. KrishnaSree K S" />
                                                        </div>
                                                        <div className="kims-alumini-info">
                                                            <p className="kims-alumini-name">Dr. KrishnaSree K S</p>
                                                            <p className="kims-alumini-role">Vice President</p>
                                                            <p className="kims-alumini-meta">Neurologist</p>
                                                        </div>
                                                    </div>

                                                    <div className="kims-alumini-bearer">
                                                        <div className="kims-alumini-photo">
                                                            <img src="/img/alumni/3-Mohamad Safwan.jpg" alt="Dr. Mohamad Safwan A" />
                                                        </div>
                                                        <div className="kims-alumini-info">
                                                            <p className="kims-alumini-name">Dr. Mohamad Safwan A</p>
                                                            <p className="kims-alumini-role">General Secretary</p>
                                                            <p className="kims-alumini-meta">General Surgeon</p>
                                                        </div>
                                                    </div>

                                                    <div className="kims-alumini-bearer">
                                                        <div className="kims-alumini-photo">
                                                            <img src="/img/alumni/4-Vishnu BS.jpg" alt="Dr. Vishnu BS" />
                                                        </div>
                                                        <div className="kims-alumini-info">
                                                            <p className="kims-alumini-name">Dr. Vishnu BS</p>
                                                            <p className="kims-alumini-role">Joint Secretary</p>
                                                            <p className="kims-alumini-meta">Family Physician</p>
                                                        </div>
                                                    </div>

                                                    <div className="kims-alumini-bearer">
                                                        <div className="kims-alumini-photo">
                                                            <img src="/img/alumni/5-Hashim Abdul Latheef.jpg" alt="Dr. Hashim Abdul Latheef" />
                                                        </div>
                                                        <div className="kims-alumini-info">
                                                            <p className="kims-alumini-name">Dr. Hashim Abdul Latheef</p>
                                                            <p className="kims-alumini-role">Treasurer</p>
                                                            <p className="kims-alumini-meta">Emergency Physician</p>
                                                        </div>
                                                    </div>

                                                    <div className="kims-alumini-bearer">
                                                        <div className="kims-alumini-photo">
                                                            <img src="/img/alumni/6-Sujith Varghese Abraham.jpg" alt="Dr. Sujith Varghese Abraham" />
                                                        </div>
                                                        <div className="kims-alumini-info">
                                                            <p className="kims-alumini-name">Dr. Sujith Varghese Abraham</p>
                                                            <p className="kims-alumini-role">Academic Committee</p>
                                                            <p className="kims-alumini-meta">Pulmonologist</p>
                                                        </div>
                                                    </div>

                                                    <div className="kims-alumini-bearer">
                                                        <div className="kims-alumini-photo">
                                                            <img src="/img/alumni/7-Arathi Raj.jpg" alt="Dr. Arathi Raj" />
                                                        </div>
                                                        <div className="kims-alumini-info">
                                                            <p className="kims-alumini-name">Dr. Arathi Raj</p>
                                                            <p className="kims-alumini-role">Executive Member</p>
                                                            <p className="kims-alumini-meta">Pediatrician</p>
                                                        </div>
                                                    </div>

                                                    <div className="kims-alumini-bearer">
                                                        <div className="kims-alumini-photo">
                                                            <img src="/img/alumni/8-Parvathy Vijayamohan.jpg" alt="Dr. Parvathy Vijayamohan" />
                                                        </div>
                                                        <div className="kims-alumini-info">
                                                            <p className="kims-alumini-name">Dr. Parvathy Vijayamohan</p>
                                                            <p className="kims-alumini-role">Executive Member</p>
                                                            <p className="kims-alumini-meta">General Physician</p>
                                                        </div>
                                                    </div>

                                                    <div className="kims-alumini-bearer">
                                                        <div className="kims-alumini-photo">
                                                            <img src="/img/alumni/9-Anu K Vasu.jpg" alt="Dr. Anu K Vasu" />
                                                        </div>
                                                        <div className="kims-alumini-info">
                                                            <p className="kims-alumini-name">Dr. Anu K Vasu</p>
                                                            <p className="kims-alumini-role">Executive Member</p>
                                                            <p className="kims-alumini-meta">Pediatric Gastroenterologist</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>

                                            {/* <!-- Footer strip CTA --> */}
                                            <div className="kims-alumini-footer-strip">
                                                <div className="kims-alumini-left">Are you a KIMSHEALTH graduate? <em>Join the family.</em></div>
                                                <div className="kims-alumini-right">
                                                    <a href="#" className="text-light">Download Brochure</a>
                                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScLV5LqIMi0H95KaMdTUiv8dC2s6K7pDOaQRAc_u7pkerIR2g/viewform" target="_blank" rel="noopener" className="kims-alumini-prim">Register Now →</a>
                                                </div>
                                            </div>

                                        </main>
                                    </div>
                                )
                            }
                        </div>

                    </div>

                    {/* <div className="find-doctor-left-col d-md-none d-block">
                        <div className="find-doc-box">
                            <VisaMedicalForm title={pageContent[5]?.title} />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default OtherAcademic