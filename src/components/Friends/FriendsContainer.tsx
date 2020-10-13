import React from "react";
import {
    addFriend,
    follow,
    FriendsPageType,
    FriendType,
    isFetching,
    progressButton,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow,
    updateNewFriendText
} from "../../Redux/friendsReducer";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {Users} from "./Users";
import {PreLoader} from "../Common/PreLoader/PreLoader";
import {ProfileType} from "../../Redux/profileReducer";
import {usersAPI} from "../../API/api";

type PropsType = {
    addFriend: () => void
    updateNewFriendText: (text: string) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: FriendType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    friendsPage: FriendsPageType
    profile: ProfileType
    pageSize: number
    TotalUsersCount: number
    currentPage: number
    isFetching: (isFetching: boolean) => void
    progressButton:(isFetching: boolean) => void
    followingInProgress:boolean
}

class UsersApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.isFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(response => {
            this.props.isFetching(false)
            this.props.setUsers(response.items)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.isFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(response => {
                this.props.isFetching(false)
                this.props.setUsers(response.items)
            })
    }

    render() {
        return (
            <>
                {this.props.friendsPage.isFetching ? <PreLoader/> : null}
                <Users
                    TotalUsersCount={this.props.TotalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    users={this.props.friendsPage}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    profile={this.props.profile}
                    progressButton={this.props.progressButton}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        profile: state.profilePage.profile,
        friendsPage: state.friendsPage,
        pageSize: state.friendsPage.pageSize,
        TotalUsersCount: state.friendsPage.TotalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        followingInProgress: state.friendsPage.followingInProgress
    }
}

export const FriendsContainer = connect(
    mapStateToProps, {
        addFriend,
        updateNewFriendText,
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        isFetching,
        progressButton
    }
)(UsersApiComponent)