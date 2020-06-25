import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {ProfileWall} from "./Wall/ProfileWall";
import './Main.css'

export function Main() {
    return (
        <>
            <main>
                <ProfileInfo/>
                <ProfileWall/>
            </main>
        </>
    )
}

