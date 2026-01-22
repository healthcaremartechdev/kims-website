"use client"
import AcademicGalleryViewer from "./AcademicGalleryViewer";
import VisaMedicalForm from "./Forms/VisaMedicalForm"
import { marked } from "marked";

const AcademicTab = ({ pageContent, baseUrl }) => {

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
                                            if(value === '3')
                                                window.location.href = `${baseUrl}/rank-holders`
                                            else if(value === '5')
                                                window.location.href = `${baseUrl}/skills-and-simulation-lab`
                                            else if(value === '6')
                                                window.location.href = `${baseUrl}/international-training-programs`
                                            else if(value === '7')
                                                window.location.href = `${baseUrl}/outstanding-research-work`
                                            else if(value === '8')
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
                                    <div dangerouslySetInnerHTML={{ __html: marked(pageContent[3]?.details) || "" }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="treat-box" id="omega4" style={{ display: "none" }}>
                            <div className="container">
                                <div className="main-heading">
                                    <h2>{pageContent[5].title}</h2>
                                </div>

                                {pageContent[5].title && (
                                    <div className="row">
                                        {pageContent[5].socomer?.map((sp, i) => (
                                            <div className="col-md-6" key={i}>
                                                <div className="socomer-tab">
                                                    <div className="procedure-acc-card mb-0">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button
                                                                    className="accordion-button"
                                                                    type="button"
                                                                >
                                                                    <span>{sp.title}</span>
                                                                </button>
                                                            </h2>
                                                            <div
                                                                className="accordion-collapse collapse show"
                                                            >
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <ul>
                                                                        {sp.socomerItem.map((spI, j) => (
                                                                            <li key={j}>
                                                                                - {spI.title}
                                                                                <a
                                                                                    href={
                                                                                        spI.file?.url
                                                                                            ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${spI.file.url}`
                                                                                            : `${baseUrl}/${spI.link}`
                                                                                    }
                                                                                >
                                                                                    {/* <i className="custom-download"></i> */}
                                                                                    <u>{spI.buttonText}</u>
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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