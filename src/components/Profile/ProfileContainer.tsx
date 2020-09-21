import React from "react";
import s from './Profile.module.css'
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {PostPageType, setUserProfile} from "../../Redux/postReducer";

export type PropsType = {
    setUserProfile: (profile: PostPageType) => void
}

export class ProfileApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div className={s.container}>
                {/*<Profile profile={this.props}/>*/}
            </div>
        )
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        profile: state.profilePage
    }
}

export const ProfileContainer = connect(
    mapStateToProps, {
        setUserProfile
    }
)(ProfileApiComponent)


