import React from "react";
import style from './Description.module.css';
import Status from "./Status";

const Description = (props) => {
    return (
        <div className={style.content}>
            <div className={style.tittle}><h2>About me</h2>
                <Status status={props.status} updateStatus={props.updateStatus}/></div>
            <div className={style.descr}>
                <p>Name: Sibgatullin Marsel</p><br/>
                <p>Ages: 23 years old</p><br/>
                <p>Education: Graduate of the Department of Informatics and Computer Engineering</p><br/>
                <p>Skills: </p><br/>
                <p>Learning technologies: PHP 7, HTML 5, JavaScript, React-Redux, CSS 3</p><br/>
            </div>
        </div>
    )
}

export default Description;