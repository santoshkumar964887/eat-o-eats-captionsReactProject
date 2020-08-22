import {INCREASE_QUANTITY,DECREASE_QUANTITY,CLEAR_PRODUCT} from './actionTypes';


export const productQuantity=(action,id)=>{
    return(dispatch)=>{
        dispatch({
            type:action==='increase'?INCREASE_QUANTITY:DECREASE_QUANTITY,
            payload:id
        })

    }
}

export const clearProduct=(id)=>{
    return(dispatch)=>{
        dispatch({
            type:CLEAR_PRODUCT,
            payload:id
        })

    }
}