import  {types} from "../types/types"; 


export const authReducer = ( initialState = {
    logged:false,
    refresh:"",
    access:""
}, action )=>{
    switch (action.type) {
        case types.login:
            return{
                ...action.payload,
                logged:true
            };
        case types.logout:
            return{
                logged:false
            }
        
        default:
            return initialState;
    }
}