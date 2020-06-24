import React from "react";

export function ProfileWall() {
    return (
        <>
            <article className='post'>
                <h1>My post</h1>
                <section className='newPost'>
                    <input className='placeholder' type="text" placeholder='your news...'/>
                    <input className='button' type="submit"/>
                </section>
                <hr className='hr'/>
                <section className='oldPost'>
                    <div className='circle'></div>
                    <div className='oldPostText'>Hello,guys! I'am here!</div>
                </section>
            </article>
        </>
    )
}