import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import getStaticText from '@/app/lib/getStaticTextServer';
import { getBaseUrl } from '@/app/lib/getBaseUrl';
import Breadcrumb from '@/components/Breadcrumb';
import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc';
import { marked } from 'marked';
import OtherAcademic from '@/components/OtherAcademic';


const OurAlumini = async () => {
    const getLangLoc = await getCurrentLangLoc()
    const basePath = await getBaseUrl(true, true);
    const data = await getStaticPageContent("our-alumini");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const staticText = await getStaticText()


    return (
        <>
            <Header />
            {/* <div role="main" className="main">
                <div className="faq-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>{pageContent ? pageContent[0]?.title : null}</h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Breadcrumb
                                        activeTitle={pageContent[0]?.title}
                                        middleTitle={''}
                                        middleURL={""}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <OtherAcademic highlight={"alumini"} pageContent={pageContent} baseUrl={basePath} />
                </div>
            </div> */}




            {/* =============================[NEW CODE START HERE]========================*/}
            {/* ========================================================================= */}

            <div role="main" className="main">
                {/* <!-- Page body --> */}
                <div className="page">

                    {/* <!-- SIDEBAR --> */}
                    <aside className="sidebar">
                        <h3>Department of Academics</h3>
                        <ul className="side-list">
                            <li><a href="#">About Academics <span className="chev">›</span></a></li>
                            <li><a href="#">Academic Leaders <span className="chev">›</span></a></li>
                            <li><a href="#">Courses We Offer <span className="chev">›</span></a></li>
                            <li><a href="#">Rank Holders <span className="chev">›</span></a></li>
                            <li><a href="#">Scientific Publications <span className="chev">›</span></a></li>
                            <li><a href="#">Skills &amp; Simulation Lab <span className="chev">›</span></a></li>
                            <li><a href="#">International Training <span className="chev">›</span></a></li>
                            <li><a href="#">Research Work <span className="chev">›</span></a></li>
                            <li className="active"><a href="#">Our Alumni <span className="chev">›</span></a></li>
                            <li><a href="#">Gallery <span className="chev">›</span></a></li>
                        </ul>
                    </aside>

                    {/* <!-- MAIN --> */}
                    <main className="main">

                        {/* <!-- HERO --> */}
                        <section className="hero">
                            <div className="hero-left">
                                <span className="badge"><span className="dot"></span>KIMSHEALTH Alumni Association</span>
                                <h2>Once a <em>KIMSian</em>,<br />always a KIMSian.</h2>
                                <p>Reconnect with your batchmates, mentors and the institution that shaped your clinical journey. Register today to stay informed about reunions, CMEs and alumni initiatives across the KIMSHEALTH network.</p>
                                <a href="https://docs.google.com/forms/" target="_blank" rel="noopener" className="hero-cta">
                                    Register as Alumni <span className="arrow">→</span>
                                </a>
                                <a href="#" className="hero-sub-cta">Learn more</a>
                            </div>
                            <div className="hero-mark" aria-hidden="true">
                                <div className="kmark"></div>
                            </div>
                        </section>

                        {/* <!-- STATS --> */}
                        <section className="stats">
                            <div className="stat"><div className="num">1,200+</div><div className="lbl">Alumni Worldwide</div></div>
                            <div className="stat"><div className="num">35+</div><div className="lbl">Countries</div></div>
                            <div className="stat"><div className="num">25</div><div className="lbl">Years of Legacy</div></div>
                            <div className="stat"><div className="num">40+</div><div className="lbl">Specialties</div></div>
                        </section>

                        {/* <!-- WRITEUP + ASIDE --> */}
                        <section className="content-row">
                            <article className="card writeup">
                                <div className="eyebrow">About the Association</div>
                                <div className="section-title"><span className="bar"></span><h2>Alumni Association Writeup</h2></div>
                                <p>The KIMSHEALTH Alumni Association brings together the doctors, nurses and healthcare professionals who trained with us and went on to serve communities across India and the world. Founded with the belief that learning never truly ends, the association is a living network of mentors, peers and friends.</p>
                                <p>Members enjoy access to continuing medical education, academic collaborations, research opportunities and exclusive alumni events. Whether you are a recent graduate or a seasoned practitioner, the association is your lifelong bridge back to KIMSHEALTH.</p>
                                <div className="d-lg-block d-none">
                                    <div className="pillars">
                                        <div className="pillar"><div className="ic">✦</div><div><b>CME &amp; Research</b><span>Access ongoing academic programmes and publications.</span></div></div>
                                        <div className="pillar"><div className="ic">✦</div><div><b>Reunions</b><span>Annual and batch-wise alumni meets across chapters.</span></div></div>
                                        <div className="pillar"><div className="ic">✦</div><div><b>Mentorship</b><span>Guide the next generation of KIMSHEALTH trainees.</span></div></div>
                                    </div>
                                </div>
                                <div className="d-lg-none d-block">
                                    <div className="pillars">
                                        <div class="owl-carousel owl-theme alumni-article-slider">
                                            <div className="pillar"><div className="ic">✦</div><div><b>CME &amp; Research</b><span>Access ongoing academic programmes and publications.</span></div></div>
                                            <div className="pillar"><div className="ic">✦</div><div><b>Reunions</b><span>Annual and batch-wise alumni meets across chapters.</span></div></div>
                                            <div className="pillar"><div className="ic">✦</div><div><b>Mentorship</b><span>Guide the next generation of KIMSHEALTH trainees.</span></div></div>
                                        </div>


                                    </div>
                                </div>

                            </article>

                            <aside className="aside">
                                <div>
                                    <div className="eyebrow">Get in touch</div>
                                    <h3>Alumni Relations Office</h3>
                                </div>

                                <div>
                                    <div className="contact-item">
                                        <div className="ic"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg></div>
                                        <div>
                                            <div className="lbl">Email</div>
                                            <div className="val">alumni@kimshealth.org</div>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="ic"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.5 0 .9.4.9.9V20c0 .5-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.5c.5 0 .9.4.9.9 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.2 1.8z" /></svg></div>
                                        <div>
                                            <div className="lbl">Phone</div>
                                            <div className="val">+91 471 294 1000</div>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="ic"><svg viewBox="0 0 24 24"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg></div>
                                        <div>
                                            <div className="lbl">Office</div>
                                            <div className="val">Academics Block, KIMSHEALTH<br />Trivandrum, Kerala</div>
                                        </div>
                                    </div>
                                </div>

                                <a href="https://docs.google.com/forms/" target="_blank" rel="noopener" className="aside-cta">Register as Alumni →</a>
                            </aside>
                        </section>

                        {/* <!-- BEARERS --> */}
                        <article className="card bearers">
                            <div className="bearers-head">
                                <div>
                                    <div className="eyebrow">Leadership</div>
                                    <div className="section-title"><span className="bar"></span><h2>Office Bearers</h2></div>
                                </div>
                                <div className="right">
                                    <button className="filter active">Executive</button>
                                    <button className="filter">Council</button>
                                    <button className="filter">Chapter Heads</button>
                                </div>
                            </div>
                            <div className="d-lg-block d-none">
                                <div className="bearers-grid">
                                    {/* <!-- Card 1 --> */}
                                    <div className="bearer">
                                        <div className="photo">
                                            <span className="tag">President</span>
                                            <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" /></svg>
                                        </div>
                                        <div className="info">
                                            <p className="name">Dr. Ramesh Pillai</p>
                                            <p className="role">President</p>
                                            <p className="meta">Batch of 2006<br />Cardiology</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card 2 --> */}
                                    <div className="bearer">
                                        <div className="photo">
                                            <span className="tag">Vice President</span>
                                            <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" /></svg>
                                        </div>
                                        <div className="info">
                                            <p className="name">Dr. Anjali Menon</p>
                                            <p className="role">Vice President</p>
                                            <p className="meta">Batch of 2008<br />Gynaecology</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card 3 --> */}
                                    <div className="bearer">
                                        <div className="photo">
                                            <span className="tag">Secretary</span>
                                            <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" /></svg>
                                        </div>
                                        <div className="info">
                                            <p className="name">Dr. Sreejith Kumar</p>
                                            <p className="role">General Secretary</p>
                                            <p className="meta">Batch of 2010<br />Orthopaedics</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card 4 --> */}
                                    <div className="bearer">
                                        <div className="photo">
                                            <span className="tag">Treasurer</span>
                                            <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" /></svg>
                                        </div>
                                        <div className="info">
                                            <p className="name">Dr. Lakshmi Nair</p>
                                            <p className="role">Treasurer</p>
                                            <p className="meta">Batch of 2011<br />Internal Medicine</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card 5 --> */}
                                    <div className="bearer">
                                        <div className="photo">
                                            <span className="tag">Jt. Secretary</span>
                                            <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" /></svg>
                                        </div>
                                        <div className="info">
                                            <p className="name">Dr. Arun Varghese</p>
                                            <p className="role">Joint Secretary</p>
                                            <p className="meta">Batch of 2013<br />Pulmonology</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-lg-none d-block">
                                <div class="owl-carousel owl-theme alumni-article-slider">
                                    {/* <!-- Card 1 --> */}
                                    <div className="bearer">
                                        <div className="photo">
                                            <span className="tag">President</span>
                                            <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" /></svg>
                                        </div>
                                        <div className="info">
                                            <p className="name">Dr. Ramesh Pillai</p>
                                            <p className="role">President</p>
                                            <p className="meta">Batch of 2006<br />Cardiology</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card 2 --> */}
                                    <div className="bearer">
                                        <div className="photo">
                                            <span className="tag">Vice President</span>
                                            <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" /></svg>
                                        </div>
                                        <div className="info">
                                            <p className="name">Dr. Anjali Menon</p>
                                            <p className="role">Vice President</p>
                                            <p className="meta">Batch of 2008<br />Gynaecology</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card 3 --> */}
                                    <div className="bearer">
                                        <div className="photo">
                                            <span className="tag">Secretary</span>
                                            <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" /></svg>
                                        </div>
                                        <div className="info">
                                            <p className="name">Dr. Sreejith Kumar</p>
                                            <p className="role">General Secretary</p>
                                            <p className="meta">Batch of 2010<br />Orthopaedics</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card 4 --> */}
                                    <div className="bearer">
                                        <div className="photo">
                                            <span className="tag">Treasurer</span>
                                            <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" /></svg>
                                        </div>
                                        <div className="info">
                                            <p className="name">Dr. Lakshmi Nair</p>
                                            <p className="role">Treasurer</p>
                                            <p className="meta">Batch of 2011<br />Internal Medicine</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card 5 --> */}
                                    <div className="bearer">
                                        <div className="photo">
                                            <span className="tag">Jt. Secretary</span>
                                            <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" /></svg>
                                        </div>
                                        <div className="info">
                                            <p className="name">Dr. Arun Varghese</p>
                                            <p className="role">Joint Secretary</p>
                                            <p className="meta">Batch of 2013<br />Pulmonology</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* <!-- Footer strip CTA --> */}
                        <div className="footer-strip">
                            <div className="left">Are you a KIMSHEALTH graduate? <em>Join the family.</em></div>
                            <div className="right">
                                <a href="#">Download Brochure</a>
                                <a href="https://docs.google.com/forms/" target="_blank" rel="noopener" className="prim">Register Now →</a>
                            </div>
                        </div>

                    </main>
                </div>
            </div>




            <Footer />
        </>
    )
}

export default OurAlumini;