import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {TextArea} from "../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../Utility/Validators/validator";

const maxLength15=maxLengthCreator(15)

type OwnProps = {

}

type PropsType = InjectedFormProps & OwnProps

export function AddMessageForm(props: PropsType) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={"newMessage"}
                component={TextArea}
                placeholder={"New Message"}
                validate={[required, maxLength15]}
            />
            <button>sent</button>
        </form>
    )
}

export const NewMessageReduxForm = reduxForm({form: "newMessageForm"})(AddMessageForm)