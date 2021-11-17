import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ booking, date, setBookingSuccess }) => {
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    const { name, time, space, price } = booking
    // console.log(props.booking);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ color: "#60CCDA", fontWeight: 500 }}>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        Price: ${price}
                    </Typography>
                    <Typography sx={{ pb: 2 }} variant="caption" display="block" gutterBottom>
                        {space} Space Available
                    </Typography>

                    <Button onClick={handleBookingOpen} variant="contained" size="large" style={{ backgroundColor: "#60CCDA" }}>BOOK APPOINTMENT</Button>
                </Paper>

            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            />
        </>
    );
};

export default Bookings;