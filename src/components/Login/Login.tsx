import React from "react";
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../Redux/authReducer";
import {StateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";

type MDTP = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
type MSTP = {
    isAuth: boolean
}

type PropsType = MDTP & MSTP

function Login(props: PropsType) {

    const onSubmit = (formData: any) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

        return <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}


const mapStateToProps = (state: StateType) => (
    {
        isAuth:state.auth.isAuth
    }
)
export default connect(
    mapStateToProps,
    {loginTC})(Login)