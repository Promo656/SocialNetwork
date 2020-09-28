import React from "react";
import s from './Profile.module.css'
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfile} from "../../Redux/profileReducer";
import { withRouter, RouteComponentProps } from "react-router-dom";

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps

export class ProfileApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId=2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div className={s.container}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let ProfileRouterComponent = withRouter(ProfileApiComponent)

export const ProfileContainer = connect(
    mapStateToProps, {
        setUserProfile
    }
)(ProfileRouterComponent)

