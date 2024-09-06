import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://x.com/YoohyukC17853" className="home__social-icon" target="_blank">
                <BsTwitterX />
            </a>
            <a href="https://www.github.com/yoohyukchang" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/yoohyukchang/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;