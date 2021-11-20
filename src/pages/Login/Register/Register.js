import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from "../../../images/login.png"
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const [error, setError] = useState("");
    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSubmitForm = e => {
        if (loginData.password !== loginData.password2) {
            setError("Password not match..!!")
            // alert("Password not match..!!")
            return
        }
        else {
            setError("")
            registerUser(loginData.email, loginData.password, loginData.name, history)
        }
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="h5" sx={{ color: "#60CCDA" }} gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleSubmitForm}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            onBlur={handleOnBlur}
                            required
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            type="text"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            onBlur={handleOnBlur}
                            required
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            onBlur={handleOnBlur}
                            required
                            id="standard-basic"
                            label="Password"
                            name="password"
                            type="password"
                            variant="standard" />
                        <Typography sx={{ textAlign: "left", marginLeft: "70px", color: "red" }} variant="caption" display="block" gutterBottom>{error}</Typography>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            onBlur={handleOnBlur}
                            required
                            id="standard-basic"
                            label="Password"
                            name="password2"
                            type="password"
                            variant="standard" />
                        <Button
                            sx={{ width: "75%", mt: 2, mb: 3 }}
                            type="submit"
                            variant="contained"
                        >Register</Button>
                        <NavLink style={{ textDecoration: "none" }} to="/login"><Button variant="text">All Ready Register? Please Login</Button></NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user.email && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Account successfully create.!
                    </Alert>}
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" sx={{ width: 1 }}></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;