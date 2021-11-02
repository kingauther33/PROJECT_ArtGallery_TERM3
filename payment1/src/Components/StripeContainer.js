import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";


const PUBLIC_KEY= "pk_test_51JpPHIB2z1KbtnvFqoH49sQHvs5b9dso3Cv6uezHoqw2LuHEQqt3FXymLrAswRK8LaE8Doq3WjMpTpmFyRJ5i68G00i6YD008s"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(){
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}