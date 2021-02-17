import { types } from "../types/types";

export const tablaDistribuidor = ()=>{
    return{
        type: types.tablaDistribuidor,
     
    }
}

export const paginaDistribuidor = (id)=>{
    return{
        type: types.paginaDistribuidor,   
        payload:{
            id:id
        }
    }
}