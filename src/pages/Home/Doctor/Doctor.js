import { Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    console.log(doctor);
    const { name, image } = doctor;

    return (
        <Grid sx={{ boxShadow: "5px 5px 10px #888888 " }} item xs={12} sm={6} md={4}>
            <img
                style={{ width: "250px", height: "200px" }}
                src={`data:image/jpeg;base64,${image}`} alt="" />
            <Typography>
                {name}
            </Typography>
        </Grid>
    );
};

export default Doctor;