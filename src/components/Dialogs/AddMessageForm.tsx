import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

type OwnProps = {

}

type PropsType = InjectedFormProps & OwnProps

export function AddMessageForm(props: PropsType) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"newMessage"} component={"textarea"} placeholder={"New Message"}/>
            <button>sent</button>
        </form>
    )
}

export const NewMessageReduxForm = reduxForm({form: "newMessageForm"})(AddMessageForm)