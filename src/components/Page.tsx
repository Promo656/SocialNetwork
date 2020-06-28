import React from "react";
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {Main} from "./Profile/Main";
import s from "./Page.module.css"
import {Dialogs} from "./Dialogs/Dialogs";

export function Page() {
    return (
        <div>
            <Header/>
            <div className={s.container}>
                <Nav/>
                {/*<Main/>*/}
                <Dialogs/>
            </div>
        </div>
    )
}

