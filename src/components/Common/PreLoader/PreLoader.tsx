import React from "react";
import s from "./PreLoader.module.css";

export function PreLoader() {
    return (
        <img className={s.isFetching}
             src="https://thumbs.gfycat.com/CorruptAthleticGalapagoshawk-size_restricted.gif"
             alt=""/>
    )
}