import React from "react";
import s from "./FormsControl.module.scss"
import {WrappedFieldProps} from "redux-form";

export const TextArea = ({input, meta, ...props}: WrappedFieldProps) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? s.formControl : ""}>
            <textarea {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}: WrappedFieldProps) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? s.formControl : ""}>
            <input {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}