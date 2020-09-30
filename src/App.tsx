import React from 'react';
import s from './App.module.css'
import {Route} from "react-router-dom";
import {LeftNav} from "./components/Nav/Left/LeftNav";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {HeaderContainer} from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className={s.generalContainer}>
            <HeaderContainer/>
            <div className={s.container}>
                <div>
                    <LeftNav/>
                </div>
                <div className={s.centerContainer}>
                    <Route path='/profile/:id?' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/friends' render={() => <FriendsContainer />}/>
                </div>
                <div>
                    {/* <RightNav/>*/}
                </div>
            </div>
        </div>
    )
}

export default App;