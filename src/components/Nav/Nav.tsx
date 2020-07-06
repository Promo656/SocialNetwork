import React from "react";
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
            <nav className={s.nav}>
                <ul className={s.container}>
                    <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></li>
                    <li><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></li>
                    <li><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></li>
                    <li><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></li>
                    <li><NavLink to="/homework" activeClassName={s.activeLink}>Homework</NavLink></li>
                </ul>
            </nav>
    )
}