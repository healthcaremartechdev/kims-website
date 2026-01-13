import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import getStaticText from '@/app/lib/getStaticTextServer';
import { getBaseUrl } from '@/app/lib/getBaseUrl';
import Breadcrumb from '@/components/Breadcrumb';
import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc';
import { marked } from 'marked';


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
            <div role="main" className="main">
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

                    <section className="section">
                        <div className="container">
                            <div className="faq-card p-4">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse0`}
                                                aria-expanded={`false`} aria-controls={`collapse0`}>
                                                <span>{pageContent[1]?.title}</span>
                                            </button>
                                        </h2>
                                        <div id={`collapse0`} className={`accordion-collapse collapse`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body main-list" dangerouslySetInnerHTML={{ __html: marked(pageContent[1]?.details || "") || "" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse1`}
                                                aria-expanded={`false`} aria-controls={`collapse1`}>
                                                <span>{pageContent[2]?.title}</span>
                                            </button>
                                        </h2>
                                        <div id={`collapse1`} className={`accordion-collapse collapse`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body main-list" dangerouslySetInnerHTML={{ __html: marked(pageContent[2]?.details || "") || "" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default OurAlumini;