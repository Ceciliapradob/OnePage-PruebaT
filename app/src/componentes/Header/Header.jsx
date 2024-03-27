import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header>
                <div className="left-item">Compleeet Labs</div>
                <div className="right-items">
                    <FaBars className="menu-icon" onClick={toggleMenu} />
                    <ul className={isOpen ? 'menu-active' : ''} >
                        <li>Home</li>
                        <li>Services</li>
                        <li>Technology</li>
                        <li>Case studies</li>
                        <li>About</li>
                        <li>Hire us</li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export { Header };
