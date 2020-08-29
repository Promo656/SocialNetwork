import React from 'react';
import s from './App.module.css'
import {Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {LeftNav} from "./components/Nav/Left/LeftNav";
import {Main} from "./components/Profile/Main";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {ActionType, AppStateType, StoreType} from "./Redux/store";
import {Friends} from "./components/Friends/Friends";
import {Groups} from "./components/Groups/Groups";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

/*type PropsType = {

}*/

function App() {
    return (
        <div className={s.generalContainer}>
            <Header/>
            <div className={s.container}>
                <div>
                    <LeftNav/>
                </div>
                <div className={s.centerContainer}>
                    <Route path='/profile' render={() => <Main />} />
                    {/*<Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>*/}
                   {/* <Route path='/friends' render={() => <Friends friends={props.state.friendsPage} dispatch={props.dispatch}/>}/>*/}
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