import React from "react";
import style from "./FormsController.module.css";

export const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formController + " " + (hasError ? style.error : "")}>
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}
