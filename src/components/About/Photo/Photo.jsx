import React from "react";
import style from './Photo.module.css';
import gomer from '../../../assets/images/gomer.png';

const Photo = (props) => {
    return (

        <div className={style.content}>

            <img className={style.photo} src={gomer}/>

            <div className={style.lnks}>
                <a href='https://vk.com/marsel_true'><img className={style.ico} src='https://image.flaticon.com/icons/png/512/48/48965.png'/></a>
                <a href='https://www.facebook.com/marsel.sibgatullin.7'><img className={style.ico} src='https://image.freepik.com/free-icon/facebook_318-9850.jpg'/></a>
                <a href='https://www.instagram.com/marsel_sib/'><img className={style.ico} src='https://image.flaticon.com/icons/png/512/87/87390.png'/></a>
                <a href='https://github.com/marselsibgatullin'><img className={style.ico} src='https://image.flaticon.com/icons/png/512/25/25231.png'/></a>
            </div>
        </div>
    )
}

export default Photo;