import { Container, Grid, Typography } from '@mui/material';
import Bookings from "../Bookings/Bookings.js"
import React from 'react';
const bookings = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        space: 10
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time: "10:05 AM - 11:30 AM",
        space: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "5:00 pm - 6:30 pm",
        space: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "8:00 AM - 10:30 AM",
        space: 10
    },
    {
        id: 5,
        name: "Pediatric Dental",
        time: "8:00 pm - 9:00 pm",
        space: 10
    },
    {
        id: 6,
        name: "Oral Surgery",
        time: "7:00 pm - 8:00 pm",
        space: 10
    }

]

const AvailableAppointment = ({ date }) => {
    return (
        <Container>
            <Typography variant="h4" sx={{ color: "#60CCDA", fontWeight: 600, my: 5 }}>Available Appointments on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Bookings key={booking.id} date={date} booking={booking} />)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;