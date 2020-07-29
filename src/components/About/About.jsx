import React from "react";
import style from './About.module.css';
import Description from "./Description/Description";
import Photo from "./Photo/Photo";

const About = (props) => {
    return (
        <div className={style.content}>
            <Photo/>
            <Description/>
        </div>
    )
}

export default About;