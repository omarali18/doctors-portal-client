import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png"
import { Button, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,
    backgroundSize: "cover"
}
const verticalCenter = {
    display: 'flex',
    alignItems: "center",
    height: '500px'
}

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={bannerBg}>
            <Box sx={{ width: '75%', mx: "auto" }}>
                {/* <Container> */}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} style={{ ...verticalCenter, textAlign: 'left' }} >
                        <Box>
                            <Typography variant="h3">
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography sx={{ color: "gray", fontSize: 13, my: '40px' }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus commodi molestiae voluptatem accusantium minima repellat, ab eligendi at praesentium reprehenderit dolorum consequatur? Voluptates fuga enim molestias quae laborum ab minus.
                            </Typography>
                            <Button variant="contained" size="large" style={{ backgroundColor: "#60CCDA" }}>GET APPOINTMENT</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} style={verticalCenter}>
                        <img style={{ width: 550 }} src={chair} alt="" />
                    </Grid>

                </Grid>
                {/* </Container> */}
            </Box>
        </Box>
    );
};

export default Banner;