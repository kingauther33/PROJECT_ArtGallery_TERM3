import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";


const PUBLIC_KEY= "pk_test_51Jp1UGJfKEcxVVQebtQvpOwMdVKYkMkwejv9u3u4aKD8Qp8kSYLpj1oLK33PfR2XqntrjsBfuGlhV04b0gRn63QX00xRxTbjC1"

const stripeTestPromise =loadStripe(PUBLIC_KEY)

export default function StripeContainer(){
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}