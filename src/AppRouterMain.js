import React,{useReducer,useEffect} from 'react'
import {Provider} from "react-redux"
import { authReducer } from './reducers/authReducer'
import { AppRouter } from './router/AppRouter'
import { store } from "./store/store";


// const init= () =>{
//     return JSON.parse(localStorage.getItem('user')) || { logged:false}
// }

export const AppRouterMain = () => {

    // useEffect(() => {
    //     localStorage.setItem('user',JSON.stringify(user))
    // }, [user])

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
