import { types } from "../types/types";


export const setEstado = (estado, id, alias,header,footer)=>{
    return{
        type: types.CambiarFiltroOrigen,
        payload:{
            estado,
            id,
            alias,
            header,
            footer

        }
    }
}

