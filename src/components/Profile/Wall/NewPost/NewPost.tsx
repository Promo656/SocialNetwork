import React from "react";
import s from "./NewPost.module.css"
import {state} from "../../../../Redux/state";

type PropsType={
    addPost:(postText:string)=>void
}

export function NewPost(props:PropsType) {

    let newPostElement = React.createRef<HTMLInputElement>()

    let addPost = () => {
        if(newPostElement.current){
            let text=newPostElement.current.value
            props.addPost(text)
            text=newPostElement.current.value=""
        }
    }

    return (
        <div>
            <input className={s.placeholder} type="text" placeholder='your news...' ref={newPostElement}/>
            <input className={s.button} type="submit" onClick={addPost}/>
        </div>
    )
}