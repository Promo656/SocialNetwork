import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./NewPost.module.css";
import React from "react";
import {maxLengthCreator, required} from "../../../../Utility/Validators/validator";
import {TextArea} from "../../../Common/FormsControl/FormsControl";

const maxLength10=maxLengthCreator(10)

type OwnProps = {

}

type PropsType = InjectedFormProps & OwnProps

export function NewPostForm(props: PropsType) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                className={s.placeholder}
                name={"newPostText"}
                component={TextArea}
                placeholder={'your news...'}
               validate={[required, maxLength10]}
            />
            <button className={s.button}>submit</button>
        </form>
    )
}

export const NewPostReduxForm = reduxForm({form: "newPostForm"})(NewPostForm)