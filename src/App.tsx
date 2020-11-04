import React from 'react';
import s from './App.module.css'
import {Route, withRouter} from "react-router-dom";
import {LeftNav} from "./components/Nav/Left/LeftNav";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./Redux/AppReducer";
import {StateType} from "./Redux/redux-store";
import {PreLoader} from "./components/Common/PreLoader/PreLoader";

type MDTP = {
    initializeAppTC: () => void
}

type MSTP = {
    initialized: boolean
}

type PropsType = MDTP & MSTP

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {

            return <PreLoader/>
        }
        return (
            <div className={s.generalContainer}>
                <HeaderContainer/>
                <div className={s.container}>
                    <div>
                        <LeftNav/>
                    </div>
                    <div className={s.centerContainer}>
                        <Route path='/profile/:id?' render={() => <ProfileContainer/>}/>
                        <Route exact path='/SocialNetwork' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/friends' render={() => <FriendsContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC})
)(App)
