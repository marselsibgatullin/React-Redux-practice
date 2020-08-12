import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/FormsController/FormsController";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";

const Input = Element("input");
const maxLength30 = maxLengthCreator(30);
const minLength8 = minLengthCreator(8);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, minLength8]}
                       component={Input} name={"login"} placeholder={"Login"}/>
            </div>
            <div>
                <Field validate={[required, maxLength30, minLength8]}
                       component={Input} name={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm;