import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Machine_Learning from './Machine_Learning';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Lvl</span>
        <div className="skills__container container grid">
            <Backend />
            <Machine_Learning />
            <Frontend />
        </div>
    </section>
  );
}

export default Skills;