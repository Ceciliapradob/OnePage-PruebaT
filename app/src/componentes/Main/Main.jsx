import React from 'react';
import './Main.css'; 

const Main = () => {
    return (
        <>
            <main>
                <div className="content">
                    <div className="sub title">
                        <h2>We build beautiful and</h2>
                        <h2>reliable web solutions</h2>
                    </div>
                    <p>
                        We strongly believe that communication, trust and transparency <br /> are the essentials of successful business relationships. <br />
                         Ready for the journey?
                    </p>
                    <div className="buttons">
                        <button className="learn-more">Learn more</button>
                        <button className="our-projects">
                            Our Projects <i className="fas fa-arrow-left"></i>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export { Main }