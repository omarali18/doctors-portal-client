import { Backdrop, Button, Fade, Modal, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time, price } = booking;
    const { user } = useAuth()

    const initialInfo = { patientName: user.displayName, email: user.email, phone: "" }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }

    const handleBookingSubmit = e => {
        // collect data
        const appointment = {
            ...bookingInfo,
            time,
            price,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // send to the server
        fetch("http://localhost:5000/appointments", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose()
                }
            })
        e.preventDefault()
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography sx={{ textAlign: "center", mb: 2 }} id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField
                                disabled
                                sx={{ width: "100%", m: 1 }}
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                placeholder="Your Name"
                                sx={{ width: "100%", m: 1 }}
                                id="outlined-size-small"
                                name="patientName"
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                placeholder="Your Eame"
                                sx={{ width: "100%", m: 1 }}
                                id="outlined-size-small"
                                name="email"
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                placeholder="Phone Number"
                                sx={{ width: "100%", m: 1 }}
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handleOnBlur}
                                // defaultValue={time}
                                size="small"
                            />
                            <TextField
                                disabled
                                placeholder="date"
                                sx={{ width: "100%", m: 1 }}
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <Button type="submit" variant="contained" size="large" style={{ backgroundColor: "#60CCDA", float: "right" }}>SEND</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal; <h1>this is booking bodal</h1>