import React from 'react';
import style from './Footer.module.css';


const Footer = (props) =>{
    return (
        <footer className={style.footer}> <hr className={style.hr}/><p>©Marsel, Kazan 2020</p></footer>
    );
}

export default Footer;