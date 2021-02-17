import  {types} from "../types/types"; 


export const paginaReducer = ( initialState = {
    id:"",
    paginaDistribuidor:false
}, action )=>{
    switch (action.type) {
        case types.tablaDistribuidor:
            return{
                paginaDistribuidor:false
            };
        case types.paginaDistribuidor:
            return{
                ...action.payload,
                paginaDistribuidor:true
            }
        
        default:
            return initialState;
    }
}