import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_h59GPBIgnLEnIt68ZLiaib1j00gGPLSBl1';

    const onToken = token => {
        console.log('Token: ', token);
        alert('Payment Successful.')
    };

    return (
        <StripeCheckout
            amount={priceForStripe}
            billingAddress
            description={`Your total is $${price}`}
            image='https://sendeyo.com/up/d/f3eb2117da'
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            panelLabel='Pay Now'
            shippingAddress
            stripeKey={publishableKey}
            token={onToken}
        />
    );
};

export default StripeCheckoutButton;