import React from "react";
import {Field, reduxForm} from "redux-form";

const AddProjectsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>Title: <Field component={"input"} name={"title"} placeholder={"Title"} /></div>
            <div>Link: <Field component={"input"} name={"link"} placeholder={"Link"} /> </div>
            <div>Description: <Field component={"textarea"} name={"desc"} placeholder={"Description"} /></div>
            <button>Add</button>
        </form>
    )
}

export const AddProjectsReduxForm = reduxForm({
    form: 'addProjectsForm'
})(AddProjectsForm)

export default AddProjectsForm;