import  {types} from "../types/types"; 



export const filtrosAvanzadosOrigen = ( initialState = {
    estado:"",
    id:0,
    abreviatura:"",
    imgH:"",
    imgF:""
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