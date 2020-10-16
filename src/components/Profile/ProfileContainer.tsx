import React from "react";
import s from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfileTC} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfileTC: (userId: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps

export class ProfileApiComponent extends React.Component<PropsType> {

    componentDidMount() {

        // @ts-ignore
        let userId = this.props.match.params.id
        if (!userId) {
            userId = 2
        }
        this.props.setUserProfileTC(userId)
    }

    render() {
        return (
            <div className={s.container}>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileApiComponent)
// let ProfileRouterComponent = withRouter(AuthRedirectComponent)
//
// export const ProfileContainer = connect(
//     mapStateToProps, {
//         setUserProfileTC
//     }
// )(ProfileRouterComponent)


export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfileTC}),
    withRouter,
    withAuthRedirect
)(ProfileApiComponent)

