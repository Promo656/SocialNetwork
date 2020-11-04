import React from "react";
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../Redux/authReducer";
import {StateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../Redux/usersSelector";

type MDTP = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
type MSTP = {
    isAuth: boolean
}

type PropsType = MDTP & MSTP

function Login({loginTC, isAuth}: PropsType) {

    const onSubmit = ({email, password, rememberMe}: any) => {
        loginTC(email, password, rememberMe)
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const mapStateToProps = (state: StateType) => (
    {
        isAuth: getIsAuth(state)
    }
)
export default connect(
    mapStateToProps,
    {loginTC})(Login)