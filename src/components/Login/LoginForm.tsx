import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../Utility/Validators/validator";

const maxLength20=maxLengthCreator(20)

export function LoginForm(props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"email"}
                    name={"email"}
                    component={Input}
                    validate={[required,maxLength20]}
                />
            </div>
            <div>
                <Field
                    placeholder={"password"}
                    name={"password"}
                    type={"password"}
                    component={Input}
                    validate={[required,maxLength20]}
                />
            </div>
            <div>
                <Field
                    name={"rememberMe"}
                    type={"checkbox"}
                    component={Input}
                /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)