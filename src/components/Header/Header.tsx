import React from "react";
import s from './Header.module.css';

export function Header() {
    return (
        <div>
            <header className={s.header}>
                <img className={s.photo} src="https://cdn.pixabay.com/photo/2014/04/02/17/01/logo-307673_1280.png" alt=""/>
            </header>
        </div>
    )
}