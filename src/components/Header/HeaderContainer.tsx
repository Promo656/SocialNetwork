import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserDataTC} from "../../Redux/authReducer";
import {StateType} from "../../Redux/redux-store";

type mapStateToPropsType={
    isAuth: boolean
    login: string
}

type MapDispatchPropsType = {
    setAuthUserDataTC: () => void
}

type PropsType = MapDispatchPropsType & mapStateToPropsType

export class AuthDataContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setAuthUserDataTC()
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
(mapStateToProps, {setAuthUserDataTC})(AuthDataContainer)