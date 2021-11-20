import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from "../../../images/fluoride.png"
import cavity from "../../../images/cavity.png"
import whitening from "../../../images/whitening.png"



const Services = () => {

    const services = [
        {
            name: "Fluoride Treatment",
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health.",
            img: fluoride
        },
        {
            name: "Cavity Filling",
            description: "Having a cavity filled may cause some discomfort, but it should not cause pain. Anyone who experiences moderate or severe pain during or after the procedure should let their dentist know.",
            img: cavity
        },
        {
            name: "teeth whitening",
            description: "With professional Teeth Whitening treatment, you can enjoy the boost in confidence of a bright, white smile. At LASER DENTAL, we trust the best Teeth Whitening Opalescence BOOST system for best.",
            img: whitening
        },
    ]
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 'bold', mb: "20px", mt: "3rem", color: 'success.main' }} variant="h6">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 'bold', mb: "6rem" }} variant="h4" >
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;