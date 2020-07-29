import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) =>{
    return (
        <nav className={style.nav}>
            <div className={style.menu}><NavLink className={style.news} to='/news'>News</NavLink></div>
            <div className={style.menu}><NavLink to='/learning'>Learning technology</NavLink></div>
            <div className={style.menu}><NavLink to='/projects'>My projects</NavLink></div>
            <div className={style.menu}><NavLink to='/about'>About me</NavLink></div>
        </nav>
    );
}

export default Navbar;