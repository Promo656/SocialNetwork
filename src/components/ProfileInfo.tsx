import React from "react";

export function ProfileInfo() {
    return (
        <>
            <article>
                <section className="personBackgroundPhoto">
                </section>
                <section className="aboutPerson">
                    <div className="photo">
                    </div>
                    <div className="description">
                        <ul>
                            <li className="name">Egor P.</li>
                            <li>Date of Birth: 1994</li>
                            <li>City: Moscow</li>
                            <li>Education: MSU</li>
                            <li>Website: github</li>
                        </ul>
                    </div>
                </section>
            </article>
        </>
    )
}