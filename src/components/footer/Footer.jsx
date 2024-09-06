import React from 'react';
import "./footer.css";
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Yoohyuk Chang</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://x.com/YoohyukC17853" className="home__social-icon" target="_blank" rel="noreferrer">
                    <BsTwitterX />
                </a>
                <a href="https://www.github.com/yoohyukchang" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/yoohyukchang/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;