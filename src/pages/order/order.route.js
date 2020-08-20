import React from 'react';
import { Route } from 'react-router-dom';
import order from '../../components/order/order.component';
import reaturant from '../../components/resturent/resturent'
const ShopPage = ({ match }) => {
    return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={order} />
     <Route  path={`${match.path}/:resturent`} component={reaturant} /> 
  </div>
);
    }

export default ShopPage;