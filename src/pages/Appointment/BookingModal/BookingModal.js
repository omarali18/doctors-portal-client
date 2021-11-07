import { Backdrop, Button, Fade, Modal, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';


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

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking;
    const handleBookingSubmit = e => {
        alert("submit is")
        handleBookingClose()
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
                                // defaultValue={time}
                                size="small"
                            />
                            <TextField
                                placeholder="Your Eame"
                                sx={{ width: "100%", m: 1 }}
                                id="outlined-size-small"
                                // defaultValue={time}
                                size="small"
                            />
                            <TextField
                                placeholder="Phone Number"
                                sx={{ width: "100%", m: 1 }}
                                id="outlined-size-small"
                                // defaultValue={time}
                                size="small"
                            />
                            <TextField
                                disabled
                                placeholder="Phone Number"
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