import React from "react";
import {
    addFriend,
    follow,
    FriendsPageType,
    FriendType,
    isFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow,
    updateNewFriendText
} from "../../Redux/friendsReducer";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {PreLoader} from "../Common/PreLoader/PreLoader";
import {ProfileType} from "../../Redux/profileReducer";

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
}

class UsersApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.isFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials:true})
            .then(response => {
                this.props.isFetching(false)
                this.props.setUsers(response.data.items)
                //this.props.setTotalUsersCount(response.data.totalCount)
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
        this.props.isFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials:true})
            .then(response => {
                this.props.isFetching(false)
                this.props.setUsers(response.data.items)
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
        isFetching: state.friendsPage.isFetching
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
        isFetching
    }
)(UsersApiComponent)