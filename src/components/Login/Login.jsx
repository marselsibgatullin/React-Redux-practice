import React, {useEffect} from 'react';
import {LoginReduxForm} from "./LoginForm";
import style from './Login.module.css';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";


const Login = (props) =>{
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    useEffect(()=>{
        if (props.isAuth) window.location.href = "/news"
    },[props.isAuth])

    return (
        <div className={style.content}>
            <div className={style.title}><h1>Login</h1></div>
            <div className={style.form}><LoginReduxForm onSubmit={onSubmit}/></div>
        </div>
    );

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login})(Login);