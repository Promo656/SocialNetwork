import React from "react";
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {Main} from "./Profile/Main";
import s from "./Page.module.css"
import {Dialogs} from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./News/News";

export function Page() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className={s.container}>
                    <Nav/>
                    <Route path='/profile' component={Main}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

