import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch("https://aqueous-plains-02922.herokuapp.com/doctors")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    console.log(doctors);
    return (
        <div>
            <h1>this is doctors {doctors.length}</h1>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor
                            ke={doctor._id}
                            doctor={doctor}
                        />)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;