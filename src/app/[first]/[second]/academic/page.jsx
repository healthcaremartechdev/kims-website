import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import Breadcrumb from '@/components/Breadcrumb';
import getStaticText from '@/app/lib/getStaticTextServer';
import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc';
import { marked } from 'marked';
import { getBaseUrl } from '@/app/lib/getBaseUrl'
import AcademicGalleryViewer from '@/components/AcademicGalleryViewer';

const Academic = async () => {
    const getLangLoc = await getCurrentLangLoc()
    const field = "populate[0]=pageContent&populate[1]=pageContent.contentCard&populate[2]=pageContent.contentCard.image&populate[3]=pageContent.socomer&populate[4]=pageContent.socomer.socomerItem&populate[5]=pageContent.socomer.socomerItem.file&populate[6]=pageContent.logoSlider&populate[7]=pageContent.logoSlider.image&populate[8]=pageContent.image";
    const data = await getStaticPageContent("academic", field);
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const staticText = await getStaticText();
    const baseUrl = await getBaseUrl(true, true);

    console.log(pageContent);


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="find-doctor-main-page academic-new-page-2026">
                    <div className="page-header">
                        <div className="container">
                            <h2>{pageContent[0]?.title}</h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Breadcrumb activeTitle={pageContent[0]?.title} middleTitle={""} middleURL={""} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section ">
                        <div className="container">
                            {
                                pageContent[1].contentCard.map((d, i) => {
                                    return <div className="col-12">
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-2">
                                                    <img
                                                        src={d.image?.url ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${d.image.url}` : '/img/no-image.jpg'}
                                                        className="img-fluid w-100 card-img"
                                                        alt={d.title}
                                                    />
                                                </div>
                                                <div className="col-md-10">
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
                    </section>

                    <div className="line-divider"></div>
                    <section className="section">
                        <div className="container main-heading sub-heading main-list">
                                <h2>{pageContent[2]?.title}</h2>
                            <div className="row">

                                <div className="col-md-7 sub-heading mb-lg-0 mb-3">
                                    <div className='text-justify' dangerouslySetInnerHTML={{ __html: marked(pageContent[2].details || "") || "" }}></div>
                                </div>
                                <div className="col-md-5 ">
                                    <div className="association-left-col sticky-left">
                                        <img src={process.env.NEXT_PUBLIC_IMAGE_URL + pageContent[2].image?.url} alt={pageContent[2]?.title} className="img-fluid rounded w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <section className="section">
                        <div className="container">
                            <div className="main-heading sub-heading main-list course-we-offer-section-new">
                                <h2>{pageContent[3]?.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: marked(pageContent[3]?.details) || "" }}></div>
                            </div>
                        </div>
                    </section>





                    <div className="line-divider"></div>
                    <section className="section  testimonial-section overflow-hidden">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-right">
                                <div className="col-md-4 col-8">
                                    <div className="main-heading">
                                        <h2>{pageContent[4]?.title}</h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href={`${baseUrl}/rank-holders`}>{staticText["View Details"]}
                                            <span>
                                                <img src="/img/slider-right-arrow.svg" className="img-fluid"
                                                    alt="View Details" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>




                    <div className="line-divider"></div>
                    <section className="section">
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
                    </section>


                    <div className="line-divider"></div>
                    <section className="section  testimonial-section overflow-hidden">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-right">
                                <div className="col-md-4 col-8">
                                    <div className="main-heading">
                                        <h2>{pageContent[6]?.title}</h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href={`${baseUrl}/skills-and-simulation-lab`}>{staticText["View Details"]}
                                            <span>
                                                <img src="/img/slider-right-arrow.svg" className="img-fluid"
                                                    alt="View Details" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <section className="section  testimonial-section overflow-hidden">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-right">
                                <div className="col-md-4 col-8">
                                    <div className="main-heading">
                                        <h2>{pageContent[7]?.title}</h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href={`${baseUrl}/international-training-programs`}>{staticText["View Details"]}
                                            <span>
                                                <img src="/img/slider-right-arrow.svg" className="img-fluid"
                                                    alt="View Details" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <section className="section  testimonial-section overflow-hidden">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-right">
                                <div className="col-md-4 col-8">
                                    <div className="main-heading">
                                        <h2>{pageContent[8]?.title}</h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href={`${baseUrl}/outstanding-research-work`}>{staticText["View Details"]}
                                            <span>
                                                <img src="/img/slider-right-arrow.svg" className="img-fluid"
                                                    alt="View Details" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <section className="section  testimonial-section overflow-hidden">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-right">
                                <div className="col-md-4 col-8">
                                    <div className="main-heading">
                                        <h2>{pageContent[9]?.title}</h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href={`${baseUrl}/our-alumini`}>{staticText["View Details"]}
                                            <span>
                                                <img src="/img/slider-right-arrow.svg" className="img-fluid"
                                                    alt="View Details" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <section className="section  testimonial-section overflow-hidden">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-right">
                                <div className="col-md-4 col-8">
                                    <div className="main-heading">
                                        <h2>{pageContent[10]?.title}</h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    {/* <div className="over-all-btn text-end">
                                        <a href={`${baseUrl}/our-alumini`}>{staticText["View Details"]}
                                            <span>
                                                <img src="/img/slider-right-arrow.svg" className="img-fluid"
                                                    alt="View Details" />
                                            </span>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>

                    <AcademicGalleryViewer pageContent={pageContent} />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Academic;
