import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { marked } from 'marked'
import React from 'react'
import getFacilityData from '@/app/lib/getFacility'

const SpecialityDetails = async ({ params }) => {
    const pramsData = await params;
    const getLangLoc = await getCurrentLangLoc()

    const data = await getFacilityData.getSingleFacility({
        slug: pramsData.details, langLoc: getLangLoc
    });


    return (
        <>
            <Header />

            <div role="main" className="main">
                <div className="speciality-details-page">

                    <div className="page-header">
                        <div className="container">
                            <h2>{data?.title}</h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Breadcrumb activeTitle={data?.title} middleTitle={""} middleURL={""} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-7  mb-lg-0 mb-3 pe-lg-5">
                                    <div className="main-heading sub-heading">
                                        <h2>{data?.title}</h2>
                                    </div>
                                    <input type="checkbox" id="read-more-toggle" className="read-more-toggle" />
                                    <div className='main-heading sub-heading main-list clamped-content' dangerouslySetInnerHTML={{ __html: marked(data?.details || "") || "" }}>
                                    </div>
                                    <label htmlFor="read-more-toggle" className="read-more-label"></label>
                                </div>
                                <div className="col-md-5">
                                    <div className="details-right-col text-center sticky-from">
                                        {/* <img src={
                                            data.speciality?.featuredImage ? process.env.NEXT_PUBLIC_IMAGE_URL + data.speciality?.featuredImage.url : "/img/no-image.jpg"} alt="" className="img-fluid w-100" /> */}

                                        <iframe width={'100%'} className='rounded-2' height="315" src={`https://www.youtube.com/embed/${data?.videoId}?si=uQi_tVy9LN6UaOhE`} title={data?.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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

export default SpecialityDetails;