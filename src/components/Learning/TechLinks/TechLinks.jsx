import React from "react";
import style from './TechLinks.module.css';
import {NavLink} from "react-router-dom";


const TechLinks = (props) => {
    let path = "/learning/" + props.id;
    return (
        <div className={style.tech}>
            <a href={path} className={style.link}>
                <div>
                    <img className={style.img} src={props.img}/>
                </div>
                <div>
                    <h3 className={style.tittle}>{props.tech}</h3>
                    <p className={style.text}>{props.desc}</p>
                </div>
            </a>
        </div>
    )
}

export default TechLinks;