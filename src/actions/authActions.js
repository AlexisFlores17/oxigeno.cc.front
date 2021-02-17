import { types } from "../types/types";

export const authLogin = (refresh,access)=>{
    return{
        type: types.login,
        payload:{
            refresh:refresh,
            access:access
        }
    }
}

export const authLogout = (value)=>{
    return{
        type: types.logout,
        payload:{
            logged:false
        }
    }
}