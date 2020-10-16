import React from "react";
import {Redirect} from "react-router-dom";
import {StateType} from "../Redux/redux-store";
import {connect} from "react-redux";

type MSTPType = {
    isAuth: boolean
}

const mstp = (state: StateType): MSTPType => {
    return {
        isAuth: state.auth.isAuth
    }

}

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any> {

        render() {
            if (!this.props.isAuth) return <Redirect to={`/login`} />
            return <Component {...this.props}/>
        }
    }
    return connect(mstp)(RedirectComponent)
}

