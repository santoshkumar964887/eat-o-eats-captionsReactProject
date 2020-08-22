import React from 'react';
import { Route } from 'react-router-dom';
import order from '../../components/order/order.component';
const ShopPage = ({ match }) => {
    return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={order} />
     
  </div>
);
    }

export default ShopPage;