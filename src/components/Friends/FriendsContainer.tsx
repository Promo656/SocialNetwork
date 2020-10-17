import React from "react";
import {
    follow,
    followingProgressButton, followTC,
    FriendType, getUsersTC,
    setCurrentPage,
    setTotalUsersCount,
    unFollow, unFollowTC
} from "../../Redux/friendsReducer";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {Users} from "./Users";
import {PreLoader} from "../Common/PreLoader/PreLoader";
import {ProfileType} from "../../Redux/profileReducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    followingProgressButton: (isFetching: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}
type MapStateToPropsType = {
    profile: ProfileType
    pageSize: number
    TotalUsersCount: number
    currentPage: number
    followingInProgress: Array<number>
    isFetching: boolean
    users: Array<FriendType>
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType

class UsersApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <PreLoader/> : null}
                <Users
                    TotalUsersCount={this.props.TotalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    profile={this.props.profile}
                    followingProgressButton={this.props.followingProgressButton}
                    followingInProgress={this.props.followingInProgress}
                    followTC={this.props.followTC}
                    unFollowTC={this.props.unFollowTC}
                />
            </>
        )
    }
}


let mapStateToProps = (state: StateType) => {
    return {
        profile: state.profilePage.profile,
        users: state.friendsPage.users,
        isFetching: state.friendsPage.isFetching,
        pageSize: state.friendsPage.pageSize,
        TotalUsersCount: state.friendsPage.TotalUsersCount,
        currentPage: state.friendsPage.currentPage,
        followingInProgress: state.friendsPage.followingInProgress,
    }
}

let withAuthComponent = withAuthRedirect(UsersApiComponent)
export const FriendsContainer = connect(
    mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        setTotalUsersCount,
        followingProgressButton,
        getUsersTC,
        followTC,
        unFollowTC
    }
)(withAuthComponent)

