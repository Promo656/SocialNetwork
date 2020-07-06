import React from "react";
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
            <article className={s.container}>
                <section className={s.BGPhoto}>
                </section>
                <section className={s.aboutPerson}>
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
                </section>
            </article>
    )
}