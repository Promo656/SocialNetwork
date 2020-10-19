import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = MSTP & MDTP

type MSTP = {
    isAuth: boolean
    login: string
}

type MDTP = {
    logoutTC: () => void
}

export function Header(props: PropsType) {
    return (
        <header className={s.header}>
            <img className={s.photo} src="https://cdn.pixabay.com/photo/2014/04/02/17/01/logo-307673_1280.png" alt=""/>
            <div className={s.login}>
                {props.isAuth
                    ? <div>{props.login}<button onClick={props.logoutTC}>Log out</button> </div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}