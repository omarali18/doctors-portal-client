import { Alert, AlertTitle, Container, Grid, Typography } from '@mui/material';
import Bookings from "../Bookings/Bookings.js"
import React, { useState } from 'react';
const bookings = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        price: 20,
        space: 10
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time: "10:05 AM - 11:30 AM",
        price: 15,
        space: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "5:00 pm - 6:30 pm",
        price: 25,
        space: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "8:00 AM - 10:30 AM",
        price: 19,
        space: 10
    },
    {
        id: 5,
        name: "Pediatric Dental",
        time: "8:00 pm - 9:00 pm",
        price: 30,
        space: 10
    },
    {
        id: 6,
        name: "Oral Surgery",
        time: "7:00 pm - 8:00 pm",
        price: 24,
        space: 10
    }

]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography variant="h4" sx={{ color: "#60CCDA", fontWeight: 600, my: 5 }}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">
                Appointment booked successfully..!!
            </Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Bookings
                        key={booking.id}
                        date={date}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;