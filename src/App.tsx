import React from 'react';
import s from './App.module.css'
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Main} from "./components/Profile/Main";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Homeworks} from "./components/homework/Homeworks";
import {AppStateType} from "./Redux/state";

type PropsType = {
    state: AppStateType
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className={s.mainContainer}>
                <Header/>
                <div className={s.container}>
                    <Nav/>
                    <Route path='/profile' render={() => <Main state={props.state}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/homework' component={Homeworks}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;