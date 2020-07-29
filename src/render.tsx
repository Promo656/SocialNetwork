import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, AppStateType, updateNewPostText} from "./Redux/state";


export let reRender = (state: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

