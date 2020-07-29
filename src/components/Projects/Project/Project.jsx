import React from "react";
import style from './Project.module.css';

const Project = (props) => {
    return (
        <div className={style.project}>
            <a href={props.link}>{props.id}.{props.title} </a>
        </div>
    )
}

export default Project;