import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false)
    const { token } = useAuth()

    const user = { email }

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    console.log(email);
    const handleAdminSubmit = e => {
        e.preventDefault()
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "authorization": ` Bearer ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setSuccess(true)
                console.log(data);
            })
    }
    return (
        <div>
            <h1>Create a new admin</h1>
            {success && <Alert severity="success">
                Made admin successfully..!!
            </Alert>}
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    style={{ width: "300px" }}
                    onBlur={handleOnBlur}
                    variant="standard" /> <br /> <br />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;