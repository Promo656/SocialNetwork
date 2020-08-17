import React from "react";
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
            <div className={s.container}>
                <div className={s.BGPhoto}>
                </div>
                <div className={s.aboutPerson}>
                    <div className={s.PPhoto}>
                    </div>
                    <div className={s.description}>
                        <ul>
                            <li className={s.name}>Egor P.</li>
                            <li>Date of Birth: 1994</li>
                            <li>City: Moscow</li>
                            <li>Education: MSU</li>
                            <li>Website: github</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}