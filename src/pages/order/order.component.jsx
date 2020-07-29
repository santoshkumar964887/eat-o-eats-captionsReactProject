import React from 'react';
import StripeCheckoutButton from "../../components/Stripe/stripeButton.component";

const order=()=>{
    const price=500;
    return(
    <div>
    <div className="cardInformation">
          You can not use genuine card information in test mode. Here is a test
          card that is widely accepted for Stripe test mode: Credit card number:
          4242 4242 4242 4242 Expiration date: any date in the future with the
          format MM/YY CVC: any 3-digits number
        </div>
        <StripeCheckoutButton price={price} />
        </div>
    );
};
export default order;