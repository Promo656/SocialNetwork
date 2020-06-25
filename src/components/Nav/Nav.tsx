import React from "react";
import  "./Nav.css"

export function Nav() {
    return (
        <>
            <nav>
                <ul className='textUl'>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        </>
    )
}