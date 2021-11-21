import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box'
// import { Typography } from '@mui/material';


const Appointments = ({ date }) => {
    const [appointments, setAppointments] = useState([])
    const { user } = useAuth()
    const updateDate = date.toLocaleDateString()

    useEffect(() => {
        const url = `https://aqueous-plains-02922.herokuapp.com/appointments?email=${user.email}&date=${updateDate}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [updateDate])

    return (
        <div>

            <h2>Appointments {appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>patientName</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.payment ? "Paid" : <Link to={`/dashboard/payment/${row._id}`}> <button>Pay</button> </Link>}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;