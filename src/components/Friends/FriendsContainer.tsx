import React from "react";
import {
    follow,
    followingProgressButton,
    FriendType,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../Redux/friendsReducer";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {Users} from "./Users";
import {PreLoader} from "../Common/PreLoader/PreLoader";
import {ProfileType} from "../../Redux/profileReducer";
import {usersAPI} from "../../API/api";

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: FriendType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    followingProgressButton: (isFetching: boolean, userId:number ) => void
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
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
            })
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

export const FriendsContainer = connect(
    mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setIsFetching,
        followingProgressButton
    }
)(UsersApiComponent)