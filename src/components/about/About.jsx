import React from 'react';
import "./about.css";
import AboutImg from "../../assets/aboutBW.jpeg";
import CV from "../../assets/yoohyuk_resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">A short introduction</span>
        <div className="my__description">
            <p>
                Hi, I'm Yoohyuk Chang,
            </p>
            <p>
                a Computer Science major at Johns Hopkins University.
            </p>
            <p>
                Passionate about applying machine learning to software applications,
            </p>
            <p>
                and have various experience in Full-stack software development.
            </p>
            <p>
                I'm always eager to learn and collaborate with great minds.
            </p>
        </div>
    </section>
  );
}

export default About;