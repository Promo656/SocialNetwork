import React from 'react';
import s from './App.module.css'
import {Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {LeftNav} from "./components/Nav/Left/LeftNav";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import { ProfileContainer } from './components/Profile/ProfileContainer';

function App() {
    return (
        <div className={s.generalContainer}>
            <Header/>
            <div className={s.container}>
                <div>
                    <LeftNav/>
                </div>
                <div className={s.centerContainer}>
                    <Route exact path='/profile/:userId' render={() => <ProfileContainer />}/>
                    <Route path='/profile' render={() => <ProfileContainer />}/>
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