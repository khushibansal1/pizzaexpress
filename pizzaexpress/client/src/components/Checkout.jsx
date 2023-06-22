import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import StripeCheckout from "react-stripe-checkout";

const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
  };

  return (
    <>
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51NJdmvSCPCoB7v42lZJQ9a7tgJtAk62yaGOaRpMmEN4FvrQfQZdagnkcnt78PuUhQiTbwb1tL1pBQ5yAB7Lq6dOR00e1wpT8Ev"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
