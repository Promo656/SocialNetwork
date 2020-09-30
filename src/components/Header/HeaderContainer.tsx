import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthType, setAuthUserData} from "../../Redux/authReducer";
import {StateType} from "../../Redux/redux-store";

type MapDispatchPropsType = {
    setAuthUserData:(data:AuthType)=>void
    isAuth:boolean
    login:string
}

type PropsType = MapDispatchPropsType

export class AuthDataContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer = connect
(mapStateToProps, {
        setAuthUserData
    }
)(AuthDataContainer)