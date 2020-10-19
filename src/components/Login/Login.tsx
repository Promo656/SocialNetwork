import React from "react";
import {LoginReduxForm} from "./LoginForm";

export function Login(){

    const onSubmit=(formData:any)=>{
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}