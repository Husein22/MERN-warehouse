import { createContext, useReducer } from "react";



export const SirovineKontekst=createContext();

export const sirovineReducer=(state,action)=>{
    switch(action.type){
        case 'SET_SIROVINE':
            return {
                sirovina:action.payload
            }
        case 'CREATE_SIROVINE':
            return{
                sirovina:[action.payload,...state.sirovina]
            }
        case 'DELETE_SIROVINU':
            return{
                sirovina:state.sirovina.filter((w)=>w._id!==action.payload._id)
            }

        default:
            return state
    }
}; 





export const SirovineKontekstProvider=({children})=>{
const  [state,dispatch]=useReducer(sirovineReducer,{
    sirovina:null
})


//dispatch({type:'SET_SIROVINU',payload:[{},{}]})

    return(
    <SirovineKontekst.Provider  value={{...state,dispatch}}>
        {children}    
    </SirovineKontekst.Provider>
)

}


