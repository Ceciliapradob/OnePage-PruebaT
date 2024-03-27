// SectionLogos.js
import React from 'react';
import './SectionLogos.css';
import airbnb from '../assets/airbnb.png'; // Ruta de la primera imagen SVG
import google from '../assets/google.png'; // Ruta de la segunda imagen SVG
import newAfrica from '../assets/newAfrica.png'; // Ruta de la segunda imagen SVG
import nike from '../assets/nike.png'; // Ruta de la segunda imagen SVG

const SectionLogos = () => {
    return (
        <section className="imagenes-section">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-12 text-center mb-5 containerImages">
                        <img src={airbnb} alt="Imagen 1" className="imagen" />
                        <span className="margen"></span>
                        <img src={google} alt="Imagen 2" className="imagen" />
                        <img src={nike} alt="Imagen 1" className="imagen" />
                        <span className="margen"></span>
                        <img src={newAfrica} alt="Imagen 2" className="imagen" />
                        <img src={airbnb} alt="Imagen 1" className="imagen" />
                        <span className="margen"></span>
                        <img src={google} alt="Imagen 2" className="imagen" />
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-light-blue">
                            <div className="card-body">
                                <div className="text-center">
                                    <h4 className="card-title">Get in touch with us</h4>
                                    <p className="card-text">Short description here.</p>
                                    <button className="btn btn-outline-white mt-4">Hire us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-light-blue">
                            <div className="card-body">
                                <div className="text-center">
                                    <h4 className="card-title">Our Projects</h4>
                                    <p className="card-text">Short description here.</p>
                                    <button className="btn btn-outline-white mt-4">See Projects</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { SectionLogos }
