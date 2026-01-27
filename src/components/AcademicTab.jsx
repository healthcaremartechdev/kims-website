"use client"
import { useSearchParams } from "next/navigation";
import AcademicGalleryViewer from "./AcademicGalleryViewer";
import { marked } from "marked";
import { useEffect } from "react";

const AcademicTab = ({ pageContent, baseUrl }) => {
   const searchParams = useSearchParams();

    useEffect(() => {
    const tab = searchParams.get('tab');

    const map = {
        about: 'omega',
        leader: 'omega1',
        course: 'omega2',
        publication: 'omega4',
        gallery: 'omega9',
    };

    if (map[tab]) {
        setTimeout(() => {
            showBox(map[tab]);
        }, 0);
    }
}, [searchParams]);


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
                                        <button type="button" className="btn-tab treat-tab py-3 active omega"
                                            onClick={() => showBox('omega')}>
                                            About Academics
                                        </button>

                                        <button type="button" className="btn-tab treat-tab py-3 omega1"
                                            onClick={() => showBox('omega1')}>
                                            Academic Leaders
                                        </button>

                                        <button type="button" className="btn-tab treat-tab py-3 omega2"
                                            onClick={() => showBox('omega2')}>
                                            Courses We Offer
                                        </button>

                                        <button type="button" className="btn-tab treat-tab py-3 omega3"
                                            onClick={() => window.location.href = `${baseUrl}/rank-holders`}>
                                            Rank Holders
                                        </button>

                                        <button type="button" className="btn-tab treat-tab py-3 omega4"
                                            onClick={() => showBox('omega4')}>
                                            Scientific Publications
                                        </button>
                                        <button type="button" className="btn-tab treat-tab py-3 omega5"
                                            onClick={() => window.location.href = `${baseUrl}/skills-and-simulation-lab`}>
                                            Skills & Simulation Lab
                                        </button>
                                        <button type="button" className="btn-tab treat-tab py-3 omega6"
                                            onClick={() => window.location.href = `${baseUrl}/international-training-programs`}>
                                            International Training
                                        </button>
                                        <button type="button" className="btn-tab treat-tab py-3 omega7"
                                            onClick={() => window.location.href = `${baseUrl}/outstanding-research-work`}>
                                            Research Work
                                        </button>
                                        <button type="button" className="btn-tab treat-tab py-3 omega8"
                                            onClick={() => window.location.href = `${baseUrl}/our-alumini`}>
                                            Our Alumni
                                        </button>
                                        <button type="button" className="btn-tab treat-tab py-3 omega9"
                                            onClick={() => showBox('omega9')}>
                                            Gallery
                                        </button>
                                    </div>
                                    <div className="visa-select d-md-none d-block">
                                        <select className="form-select" aria-label="Default select example" onChange={(e) => {
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
                                                showBox('omega' + e.target.value)
                                        }}>
                                            <option value="">About Academic</option>
                                            <option value="1">Academic Leaders</option>
                                            <option value="2">Courses We Offer</option>
                                            <option value="3">Rank Holders</option>
                                            <option value="4">Scientific Publications</option>
                                            <option value="5">Skills & Simulation Lab</option>
                                            <option value="6">International Training</option>
                                            <option value="7">Research Work</option>
                                            <option value="8">Our Alumni</option>
                                            <option value="9">Gallery</option>
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
                            <div className="container main-heading sub-heading main-list">
                                <h2>{pageContent[2]?.title}</h2>
                                <div className="row">

                                    <div className="col-md-12 sub-heading mb-lg-0 mb-3">
                                        <div className='text-justify' dangerouslySetInnerHTML={{ __html: marked(pageContent[2].details || "") || "" }}></div>
                                    </div>
                                    {/* <div className="col-md-5 ">
                                        <div className="association-left-col sticky-left">
                                            <img src={process.env.NEXT_PUBLIC_IMAGE_URL + pageContent[2].image?.url} alt={pageContent[2]?.title} className="img-fluid rounded w-100" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="treat-box" id="omega1" style={{ display: "none" }}>
                            <div className="container">
                                {
                                    pageContent[1].contentCard.map((d, i) => {
                                        return <div className="col-12">
                                            <div className="card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img
                                                            src={d.image?.url ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${d.image.url}` : '/img/no-image.jpg'}
                                                            className="img-fluid w-100 card-img"
                                                            alt={d.title}
                                                        />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body sub-heading main-heading">
                                                            {/* <h5 className="card-title">{d.title}</h5> */}
                                                            <p
                                                                className="card-text"
                                                                dangerouslySetInnerHTML={{ __html: marked(d.details) }}
                                                            ></p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                        <div className="treat-box" id="omega2" style={{ display: "none" }}>
                            <div className="container">
                                <div className="main-heading sub-heading main-list course-we-offer-section-new">
                                    <h2>{pageContent[3]?.title}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: pageContent[3]?.details || "" }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="treat-box" id="omega4" style={{ display: "none" }}>
                            <div className="container">
                                <div className="main-heading">
                                    <h2>{pageContent[6].title}</h2>
                                </div>

                                {pageContent[6].title && (
                                    <div className="faq-card scientyfic-proceding-faq p-4">
                                        <div className="accordion" id="accordionExample">
                                            {pageContent[6].socomer?.map((sp, i) => (
                                                <div className="accordion-item" key={i}>
                                                    <h2 className="accordion-header">
                                                        <button className={`accordion-button ${i === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`}
                                                            aria-expanded={`${i === 0 ? "true" : "false"}`} aria-controls={`collapse${i}`}>
                                                            <span>{sp.title}</span>
                                                        </button>
                                                    </h2>
                                                    <div id={`collapse${i}`} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body main-list">
                                                            <ul>
                                                                {sp.socomerItem.map((spI, j) => (
                                                                    <li key={j}>

                                                                        <a
                                                                            href={
                                                                                spI.file?.url
                                                                                    ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${spI.file.url}`
                                                                                    : `${baseUrl}/${spI.link}`
                                                                            }
                                                                        >
                                                                            {/* <i className="custom-download"></i> */}
                                                                            <u>{spI.title}</u>
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>



                                            ))}
                                        </div>
                                    </div>

                                )}

                            </div>
                        </div>

                        <div className="treat-box" id="omega9" style={{ display: "none" }}>
                            <div className="container">
                                <div className="row justify-content-between" data-aos="fade-right">
                                    <div className="col-md-4 col-8">
                                        <div className="main-heading">
                                            <h2>{pageContent[10]?.title}</h2>
                                        </div>
                                    </div>
                                </div>
                                <AcademicGalleryViewer pageContent={pageContent} />
                            </div>
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

export default AcademicTab