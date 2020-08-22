import {ADD_PRODUCT_BASKET} from '../Action/actionTypes';
import {GET_NUMBERS_BASKET} from '../Action/actionTypes';
import {INCREASE_QUANTITY,DECREASE_QUANTITY,CLEAR_PRODUCT} from '../Action/actionTypes';

const initialState={
    basketNumbers:0,
    cartCost:0,
    products:{
        "1":{
              "menu_id": "1",
              "name": "Sweet Corn Soup",
              "price": 99,
              "img": "https://iili.io/dw1P0x.jpg",
              "numbers":0,
              "inCart":false
              
            },
        "2":{
              "menu_id": "2",
              "name": "Aloo Paranthas",
              "price": 129,
              "img": "https://iili.io/dw1GDX.jpg",
              "numbers":0,
              "inCart":false
              
            },
        "3":{
              "menu_id": "3",
              "name": "Burger",
              "price": 155,
              "img": "https://iili.io/dw1ENt.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "4":{
              "menu_id": "4",
              "name": "Chicken Biryani",
              "price": 199,
              "img": "https://iili.io/dw11RI.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "5":{
              "menu_id": "5",
              "name": "Chole Bhatura",
              "price": 119,
              "img": "https://iili.io/dw1WVs.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "6":{
              "menu_id": "6",
              "name": "Tandoori Chicken",
              "price": 299,
              "img": "https://iili.io/dw10HN.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "7":{
              "menu_id": "7",
              "name": "Egg Biryani",
              "price": 149,
              "img": "https://iili.io/dw1wl4.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "8":{
              "menu_id": "8",
              "name": "Mutton Biryani",
              "price": 249,
              "img": "https://iili.io/dw1vO7.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "9":{
              "menu_id": "9",
              "name": "North Indian Thali",
              "price": 249,
              "img": "https://iili.io/dw1NUl.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "10":{
              "menu_id": "10",
              "name": "Sea Food Combo",
              "price": 399,
              "img": "https://iili.io/dw16fj.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "11":{
              "menu_id": "11",
              "name": "Dosa",
              "price": 99,
              "img": "https://iili.io/dw1jff.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "12":{
              "menu_id": "12",
              "name": "Naan",
              "price": 99,
              "img": "https://iili.io/dw18b9.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "13":{
              "menu_id": "13",
              "name": "Paneer Manjurian",
              "price": 149,
              "img": "https://iili.io/dw1gWu.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "14":{
              "menu_id": "14",
              "name": "Vada Pav",
              "price": 99,
              "img": "https://iili.io/dw1iUQ.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "15":{
              "menu_id": "15",
              "name": "Pasta",
              "price": 119,
              "img": "https://iili.io/dw1rib.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "16":{
              "menu_id": "16",
              "name": "Noodles",
              "price": 129,
              "img": "https://iili.io/dw1Uxe.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "17":{
              "menu_id": "17",
              "name": "Dessert Combo",
              "price": 349,
              "img": "https://iili.io/dw1XiG.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "18":{
              "menu_id": "18",
              "name": "Grilled Sandwich",
              "price": 79,
              "img": "https://iili.io/dw1eJ2.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "19":{
              "menu_id": "19",
              "name": "Mocktail",
              "price": 119,
              "img": "https://iili.io/dw1kRS.jpg",
              "numbers":0,
              "inCart":false
              
            },
            "20":{
              "menu_id": "20",
              "name": "Choclate Smoothie",
              "price": 129,
              "img": "https://iili.io/dw1Vxn.jpg",
              "numbers":0,
              "inCart":false
              
            }
    }
    
}


export default (state=initialState,action)=>{
  let productSelected={};
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            productSelected={...state.products[action.payload]};
            
            productSelected.numbers+=1;
            productSelected.inCart=true;
            
            return {
                ...state,
                basketNumbers:state.basketNumbers+1,
                cartCost:state.cartCost+state.products[action.payload].price,
                products:{
                    ...state.products,
                    [action.payload]:productSelected
                }
            }
            case GET_NUMBERS_BASKET:
            return {
               ...state
               
                
            }
            case INCREASE_QUANTITY:
              productSelected={...state.products[action.payload]};
              productSelected.numbers+=1;
              return {
               ...state,
               cartCost:state.cartCost+state.products[action.payload].price,
               products:{
                 ...state.products,
                 [action.payload]:productSelected
               },
               basketNumbers:state.basketNumbers+1
                
            }
            case DECREASE_QUANTITY:
              productSelected={...state.products[action.payload]};
              let newCarCost=0;
              let newBasketNumbers=0;

              if(productSelected.numbers===0){
                productSelected.numbers=0;
                newCarCost=state.cartCost;
                newBasketNumbers=state.basketNumbers;
              }
              else{
                productSelected.numbers-=1;
                newCarCost=state.cartCost-state.products[action.payload].price;
                newBasketNumbers=state.basketNumbers-1
              }
            
            
              return {
               ...state,
              cartCost:newCarCost,
               products:{
                 ...state.products,
                 [action.payload]:productSelected
               },
               basketNumbers:newBasketNumbers
               
                
            }
            case CLEAR_PRODUCT:
              productSelected={...state.products[action.payload]};
              let prodNumbers=productSelected.numbers;
              productSelected.numbers=0;
              productSelected.inCart=false;
             return {
                ...state,
                basketNumbers:state.basketNumbers-prodNumbers,
                cartCost:state.cartCost-(prodNumbers*state.products[action.payload].price),
                products:{
                  ...state.products,
                  [action.payload]:productSelected
                }
              }
        default:
            return state;
    }
    
}