import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51JxLJAAoNVHEWWo1uThI3tmFaPqftT37EWOoERfNyA6NtoB2QtJu8Tng8mpauKT7a4Jmte4KLipU3yFin61ionyC00dyRk8juQ')

const Payment = () => {
    const { AppointmentId } = useParams()
    const [appointment, setAppointment] = useState({})

    useEffect(() => {
        fetch(`https://aqueous-plains-02922.herokuapp.com/appointments/${AppointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [AppointmentId])

    return (
        <div>
            <h2>Please pay for: {appointment.patientName} for {appointment.serviceName}  </h2>
            <h1>Pay: {appointment.price}</h1>

            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;