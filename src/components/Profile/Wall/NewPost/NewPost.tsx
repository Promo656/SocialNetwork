import React, {ChangeEvent} from "react";
import s from "./NewPost.module.css"
import {PostPageType} from "../../../../Redux/store";

type PropsType = {
    onPostChange: (text: string) => void
    addPost: () => void
    postPage:PostPageType
}

export function NewPost(props: PropsType) {



    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        props.onPostChange(text)
    }

    return (
        <div>
            <input
                className={s.placeholder}
                type="text"
                placeholder='your news...'
                value={props.postPage.newPostText}
                onChange={onPostChange}
            />
            <input className={s.button} type="submit" onClick={addPost}/>
        </div>
    )
}

