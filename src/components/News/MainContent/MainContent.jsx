import React from "react";
import style from './MainContent.module.css';


const MainContent = (props) => {
    return (
        <div className={style.maincontent}>
            <a href={props.main.url}><img className={style.imagemain} src={props.main.urlToImage} /></a>
            <div >
                <div><a className={style.title} href={props.main.url}><h3>{props.main.title}</h3></a></div>
                <div><a className={style.descriptionmain} href={props.main.url}><p>{props.main.description}</p></a></div>
            </div>
        </div>
    );
}
export default MainContent;
