import React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import chair from "../../../images/chair.png"
import Clander from '../../Shared/Clander/Clander';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Clander date={date} setDate={setDate} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "100%" }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;