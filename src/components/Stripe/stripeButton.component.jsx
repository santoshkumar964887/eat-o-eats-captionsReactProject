import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100*75;
  const publishableKey = 'pk_test_hMzyia9jY0IbVNmrzBrKPhVr00cKUfjBBt';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      currency="INR"
      billingAddress
      shippingAddress
      image='https://www.freepik.com/free-vector/fast-food-set_4278071.htm#page=1&query=food%20icon&position=2'
      description={`Your total is inr${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;