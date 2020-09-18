import React from "react";
import {
    addFriendAC,
    FollowAC,
    FriendsPageType,
    FriendType,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    UnFollowAC,
    updateNewFriendTextAC
} from "../../Redux/friendsReducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import axios from "axios";
import {Users} from "./Users";

type PropsType = {
    addFriend: () => void
    updateNewFriendText: (text: string) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: FriendType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    friendsPage: FriendsPageType
    pageSize: number
    TotalUsersCount: number
    currentPage: number
}

class UsersApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    /*    getFriends = () => {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }*/

    /*    onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
            let text = e.currentTarget.value
            this.props.updateNewFriendText(text)
        }
        addFriend = () => {
            this.props.addFriend()
        }*/

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            TotalUsersCount={this.props.TotalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            users={this.props.friendsPage}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
        />
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        friendsPage: state.friendsPage,
        pageSize: state.friendsPage.pageSize,
        TotalUsersCount: state.friendsPage.TotalUsersCount,
        currentPage: state.friendsPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addFriend: () => {
            dispatch(addFriendAC())
        },
        updateNewFriendText: (text: string) => {
            dispatch(updateNewFriendTextAC(text))
        },
        follow: (userId: string) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users: FriendType[]) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(SetTotalUsersCountAC(totalCount))
        }
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)