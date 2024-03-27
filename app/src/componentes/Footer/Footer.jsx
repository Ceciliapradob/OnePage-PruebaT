    import React from 'react';
    import './Footer.css';
    import { FaTwitter, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

    const Footer = () => {
        return (
            <footer className="footer-section">
                <div className="container containerFooter">
                    <div className="row filaContainer">
                        {/* Primera columna izquierda */}
                        <div className="col-md-3 containerLeft">
                            <h5>compleet labs</h5>
                            <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla</p>
                            <div className="icon-row">
                                <FaTwitter  className='iconsR'/>
                                <FaWhatsapp  className='iconsR'/>
                                <FaFacebook  className='iconsR'/>
                                <FaInstagram  className='iconsR'/>

                            </div>
                        </div>

                        {/* Columna derecha */}
                        <div className="col-md-6 containerRight">
                            <div className="row filaContainer2">
                                {/* Primera columna derecha */}
                                <div className="col-md-4">
                                    <h5>SISTEMAP</h5>
                                    <ul>
                                        <li>Home</li>
                                        <li>Technology</li>
                                        <li>Services</li>
                                        <li>About</li>
                                    </ul>
                                </div>

                                {/* Segunda columna derecha */}
                                <div className="col-md-4">
                                    <h5>CASE STUDIES</h5>
                                    <ul>
                                        <li>Swiss Airlines</li>
                                        <li>Google</li>
                                        <li>Apple</li>
                                        <li>Nike</li>
                                    </ul>
                                </div>

                                {/* Tercera columna derecha */}
                                <div className="col-md-4">
                                    <h5>CONTACT</h5>
                                    <ul>
                                        <li>Jobs</li>
                                        <li>Hire us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

    export { Footer };
