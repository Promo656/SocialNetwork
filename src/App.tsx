import React from 'react';
import s from './App.module.css'
import {Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {LeftNav} from "./components/Nav/Left/LeftNav";
import {Main} from "./components/Profile/Main";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";

function App() {
    return (
        <div className={s.generalContainer}>
            <Header/>
            <div className={s.container}>
                <div>
                    <LeftNav/>
                </div>
                <div className={s.centerContainer}>
                    <Route path='/profile' render={() => <Main/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/friends' render={() => <FriendsContainer />}/>
                    {/*<Route path='/community' render={() => <Groups groups={props.state.groupPage} dispatch={props.dispatch}/>}/>*/}
                </div>
                <div>
                    {/* <RightNav/>*/}
                </div>
            </div>
        </div>
    )
}

export default App;