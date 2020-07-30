import {store} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppStateType} from "./Redux/state";


let reRender = (state: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState());
store.subscribe(reRender)