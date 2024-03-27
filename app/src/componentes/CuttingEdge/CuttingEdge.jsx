// CuttingEdge.js
import React from 'react';
import './CuttingEdge.css';

import { FaCss3Alt, FaSass, FaNodeJs, FaReact, FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";


const CuttingEdge = () => {
    return (
        <section className="cutting-edge-section">
            <div className="container containerPadre py-5">
                
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="text-container">
                            <h2 className="subtitle">We use cutting edge technology</h2>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis erat vitae nunc malesuada dignissim. Integer tristique eget ex id dapibus. Mauris scelerisque vestibulum elit, at vehicula magna sodales sed. Nullam tincidunt, ligula eget auctor tempus, justo tortor tincidunt odio, nec sagittis nunc leo nec mauris. Donec eget rhoncus leo. Ut et ex felis. Donec ut pharetra purus, eu molestie metus.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="icon-container">
                            <div className="row">
                                <div className="col-2">
                                    <FaHtml5 className='icons html'/>
                                    
                                </div>
                                <div className="col-2">
                                    <FaCss3Alt className='icons css'/>
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <FaSass className='icons sass'/>
                                    
                                </div>
                                <div className="col-2">
                                    <FaNodeJs className='icons node'/>
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <TbBrandJavascript className='icons javascript'/>
                                    
                                </div>
                                <div className="col-2">
                                    <FaReact className='icons react'/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CuttingEdge;
