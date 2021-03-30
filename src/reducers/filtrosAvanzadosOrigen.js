import  {types} from "../types/types"; 



export const filtrosAvanzadosOrigen = ( initialState = {
    estado:"",
    id:0,
}, action )=>{
    switch (action.type) {
        case types.CambiarFiltroOrigen:
            return{
                ...initialState,
                ...action.payload
            };
        
        default:
            return initialState;
    }
}