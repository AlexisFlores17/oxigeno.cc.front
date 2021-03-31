import { types } from "../types/types";


export const setEstado = (estado, id)=>{
    return{
        type: types.CambiarFiltroOrigen,
        payload:{
            estado: estado,
            id: id
        }
    }
}

