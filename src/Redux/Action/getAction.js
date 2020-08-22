import {GET_NUMBERS_BASKET} from './actionTypes';


export const getNumbers=()=>{
    return(dispatch)=>{
        dispatch({
            type:GET_NUMBERS_BASKET
        })
    }
}