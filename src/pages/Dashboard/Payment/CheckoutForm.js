import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import userEvent from '@testing-library/user-event';
import useAuth from '../../../Hooks/useAuth'
import { CircularProgress } from '@mui/material';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("")
    const [error, setError] = useState("")
    const { price, patientName, _id } = appointment;
    const { user } = useAuth();
    const [success, setSuccess] = useState("")
    const [proccessing, setProcessing] = useState(false)

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret);
            })
    }, [price])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message);
            setSuccess("")
        }
        else {
            setError("")
            console.log(paymentMethod);
        }

        // Payment intent

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess("")
        }
        else {
            setError("");
            setSuccess("Your payment processes successfully.")
            console.log(paymentIntent);
            setProcessing(false)

            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent?.client_secret.slice('_secret')[0]
            }
            fetch(`http://localhost:5000/appointments/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/josn'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
        setProcessing(false)

    }

    return (
        <div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {proccessing ? <CircularProgress /> : <button button type="submit" disabled={!stripe || success}>
                    Pay ${price}
                </button>}
            </form>
        </div >
    );
};

export default CheckoutForm;