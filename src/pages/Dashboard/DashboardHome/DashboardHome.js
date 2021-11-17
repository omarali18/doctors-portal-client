import * as React from 'react';
import { Grid } from '@mui/material';
import Clander from '../../Shared/Clander/Clander';
import Appointments from '../Appointments/Appointments';


const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <Clander
                    date={date}
                    setDate={setDate}
                ></Clander>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Appointments
                    date={date}
                />
            </Grid>

        </Grid>
    );
};

export default DashboardHome;