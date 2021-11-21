import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState(null)

    const handlesubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("image", image);

        fetch("https://aqueous-plains-02922.herokuapp.com/doctors", {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("Added a new doctor successfully");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            <h1>Add a New Doctor</h1>
            <form onSubmit={handlesubmit}>
                <TextField
                    sx={{ width: "50%" }}
                    label="Name"
                    onChange={e => setName(e.target.value)}
                    type="text"
                    variant="standard"
                />
                <br />
                <TextField
                    sx={{ width: "50%", my: 5 }}
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    variant="standard"
                />
                <br />
                <Input
                    accept="image/*"
                    onChange={e => setImage(e.target.files[0])}
                    type="file"
                />
                <br />
                <Button sx={{ my: 3 }} variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;