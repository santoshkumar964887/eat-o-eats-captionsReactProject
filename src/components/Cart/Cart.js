import React from 'react';
import {connect} from'react-redux';
import './Cart.css';
import {productQuantity,clearProduct} from '../../Redux/Action/productQuantity';

function Cart({basketProps,productQuantity,clearProduct}) {
    
    let cartProducts=[];
    Object.keys(basketProps.products).forEach((item)=>{
        if(basketProps.products[item].inCart){
            cartProducts.push(basketProps.products[item]);
        }
        
    })
    
    let finalProducts=cartProducts.map((item,index)=>{
        console.log(item);
        return(
            <>
                <div className="product">
                <ion-icon onClick={()=>clearProduct(item.menu_id)} name='close-circle'></ion-icon>
                    <span className="sm-hide">{item.name}</span>
                    <img alt={item.id} src={item.img}></img>
                </div>
                <div className="price sm-hide">Rs.{item.price}</div>
                <div className="quantity">
                    <ion-icon onClick={()=>productQuantity('decrease',item.menu_id)} classname='decrease' name='remove-circle-outline'></ion-icon>
                    <span>{item.numbers}</span>
                    <ion-icon onClick={()=>productQuantity('increase',item.menu_id)} classname='increase' name='add-circle-outline'></ion-icon>
                </div>
                <div className="total">Rs.{item.numbers*item.price}</div>
                
                
                


            
            </>
        )
    })
    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">Food Item</h5>
                <h5 className="price sm-hide">Price</h5>
                <h5 className="quantity">Quantity</h5>
                <h5 className="total">Total</h5>

            </div>
            <div className="products">
            {finalProducts}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Cart Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost}.00</h4>
            </div>
            
        </div>
    )
}
const mapStateToProps=(state)=>({
    basketProps:state.basketState
});
export default connect(mapStateToProps,{productQuantity,clearProduct})(Cart);
