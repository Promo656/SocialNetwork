import React from "react";
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {Main} from "./Profile/Main";
import s from "./Page.module.css"
import {Dialogs} from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./News/News";
import {Homeworks} from "./homework/Homeworks";

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
                    <Route path='/homework' component={Homeworks}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

