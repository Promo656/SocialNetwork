import React from "react";
import s from "./LeftNav.module.css"
import {NavLink} from "react-router-dom";
import {weather} from "../../../API/api";

export function LeftNav() {
    return (
            <nav className={s.nav}>
                <ul className={s.container}>
                    <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
                    <li><NavLink to="/newsfeed" activeClassName={s.activeLink}>NewsFeed</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></li>
                    <li><NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink></li>
                    <li><NavLink to="/community" activeClassName={s.activeLink}>Community</NavLink></li>
                    <li><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></li>
                    <li><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></li>
                    <button onClick={()=>{
                        weather.getWeather().then(response=>{
                            return response.data
                        })
                    }}>X</button>
                </ul>

            </nav>
    )
}