import React from 'react';
import s from './App.module.css'
import {Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {LeftNav} from "./components/Nav/Left/LeftNav";
import {Main} from "./components/Profile/Main";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {ActionType, AppStateType} from "./Redux/store";
import {Friends} from "./components/Friends/Friends";

type PropsType = {
    state: AppStateType
    dispatch: (action: ActionType) => void
}

function App(props: PropsType) {
    return (
        <div className={s.generalContainer}>
            <Header/>
            <div className={s.container}>
                <div>
                    <LeftNav/>
                </div>
                <div className={s.centerContainer}>
                    <Route path='/profile' render={() => <Main state={props.state} dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state} dispatch={props.dispatch}/>}/>
                    <Route path='/friends' render={() => <Friends friends={props.state.friendsPage} dispatch={props.dispatch}/>}/>
                </div>
                <div>
                    {/* <RightNav/>*/}
                </div>
            </div>
        </div>
    )
}

export default App;