import {ADD_PRODUCT_BASKET} from './actionTypes';

export const addToBasket=itemId=>{
    return (dispatch)=>{
        console.log(itemId);
        dispatch({
            type:ADD_PRODUCT_BASKET,
            payload:itemId
        })
    }
}