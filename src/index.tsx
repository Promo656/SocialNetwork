import {store} from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppStateType} from "./Redux/store";
import {BrowserRouter} from "react-router-dom";
import {v1} from "uuid";
import {StoreContext} from "./StoreContext";

let reRender = (state: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App/>
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState());
store.subscribe(() => {
    let state = store.getState()
    reRender(state)
})