import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Button, Typography } from '@mui/material';
import doctor from "../../../images/doctor.png"
import bg from "../../../images/appointment-bg.png"

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: "rgba(45, 65, 102,0.8)",
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
// style={{ height: 330 }}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}   >

                <Grid item xs={12} md={5} >
                    <img

                        style={{ width: '400px', marginTop: "-110px" }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={7} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: "#60CCDA" }}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant="h3" style={{ color: "white" }}>
                            Make an appointment today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: "white", fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi asperiores natus eligendi vitae rerum error alias assumenda consequuntur repudiandae iure, dolorum accusamus id doloribus odit atque est dignissimos veritatis laudantium vel ipsum! Voluptate maiores accusamus libero officiis voluptatibus excepturi.
                        </Typography>
                        <Button variant="contained" size="large" style={{ backgroundColor: "#60CCDA" }}>Learn more</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;