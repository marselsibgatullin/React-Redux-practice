import React from "react";
import style from './TechName.module.css';


const TechName = (props) => {
    let path = "/learning/" + props.link;
    return (
        <div className={style.tech}>
            <a className={style.text} href={path}><h3>{props.techname}</h3></a>
        </div>
    )
}

export default TechName;