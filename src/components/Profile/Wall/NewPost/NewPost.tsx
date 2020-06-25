import React from "react";

export function NewPost() {
    return (
        <section className='newPost'>
            <input className='placeholder' type="text" placeholder='your news...'/>
            <input className='button' type="submit"/>
        </section>
    )
}