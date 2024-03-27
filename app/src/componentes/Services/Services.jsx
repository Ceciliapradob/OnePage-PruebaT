import React from 'react';
import './Services.css';


const Services = () => {
    return (
        <>
            <section className="services-section text-white">
                <div className="container containerCardss py-5">
                    <h2 className="text-center mb-4">Our services</h2>
                    <p className="text-center contentSection mb-5">We feel very strong about our skills when it comes to planning, designing, <br />and coding applications. Here is what we love to do.</p>

                    <div className="row justify-content-center gx-2">
                        <div className="card-container col-md-3">
                            <div className="service-card p-4 mb-4 bg-white">
                                <i className="bi bi-journal-richtext fs-2 mb-3 d-block text-primary"></i>
                                <div className="containerContent">
                                    <h4 className='title-card'>Business & Product Concept</h4>
                                    <p className='content-card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod gravida tempor.</p>
                                </div>
                                <div className="containerBtn">
                                    <button className="btn btn-outline-secondary">Learn more</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-container col-md-3">
                            <div className="service-card p-4 mb-4 bg-white">
                                <i className="bi bi-laptop fs-2 mb-3 d-block text-primary"></i>
                                <div className="containerContent">
                                    <h4 className='title-card'>Business & Product Concept</h4>
                                    <p className='content-card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod gravida tempor.</p>
                                </div>
                                <div className="containerBtn">
                                    <button className="btn btn-outline-secondary">Learn more</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-container col-md-3">
                            <div className="service-card p-4 mb-4 bg-white">
                                <i className="bi bi-pencil fs-2 mb-3 d-block text-primary"></i>
                                <div className="containerContent">
                                    <h4 className='title-card'>Business & Product Concept</h4>
                                    <p className='content-card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod gravida tempor.</p>
                                </div>
                                <div className="containerBtn">
                                    <button className="btn btn-outline-secondary">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export { Services }