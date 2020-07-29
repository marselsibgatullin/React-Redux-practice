import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) =>{

    return (
        <header className={style.header}>
            <NavLink to='/'><img src='https://www.pngtosvg.com/gallery/wp-content/uploads/2019/08/814403517.png' alt='Just believe'/></NavLink>
            <div className={style.tittle}>
                <h1>All In Your Hands</h1>
            </div>
            <div className={style.login}>
                {props.isAuth ? props.login :<a className={style.link} href='https://social-network.samuraijs.com/login'>Login</a>}
            </div>
        </header>
    );
}

export default Header;