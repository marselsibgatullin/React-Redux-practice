import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {Element} from "../common/FormsController/FormsController";

const Textarea = Element("textarea");
const Input = Element("input");
const maxLength30 = maxLengthCreator(30);
const maxLength100 = maxLengthCreator(100);
const minLength2 = minLengthCreator(2);
const minLength10 = minLengthCreator(10);

const AddProjectsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>Title: <Field validate={[required, maxLength30, minLength2]} component={Input}
                               name="title" placeholder="Title"/></div>
            <div>Link: <Field validate={[required, minLength2]} component={Input}
                              name="link" placeholder="Link"/></div>
            <div>Description: <Field validate={[required, maxLength100, minLength10]} component={Textarea}
                                     name="desc" placeholder="Description"/></div>
            <button>Add</button>
        </form>
    )
}

export const AddProjectsReduxForm = reduxForm({
    form: 'addProjectsForm'
})(AddProjectsForm)