import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import style from './Login.module.css';


const Login = (props) =>{
    const onSubmit = (formData) =>{
        console.log(formData);
    }
    return (
        <div className={style.content}>
            <div className={style.title}><h1>Login</h1></div>
            <div className={style.form}><LoginReduxForm onSubmit={onSubmit}/></div>
        </div>

    );
}

export default Login;