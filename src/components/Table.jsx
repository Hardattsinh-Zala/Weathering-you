import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Alert from '@mui/material/Alert';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getData } from '../logic/api'
import { useState, useEffect } from 'react';
import "../index.css";

function createData(conditions, values) {
    return { conditions, values };
}

export default function BasicTable({ city }) {
    const [info, setInfo] = useState({});

    async function getRows() {
        const weather = await getData(city);
        if (weather == 400) {
            return 400;
        }
        const rows = [
            createData('Temperature (in C)', weather.current.temp_c),
            createData('Temperature (in F)', weather.current.temp_f),
            createData('Humidity', weather.current.humidity),
            createData('Pressure (in Hg)', weather.current.pressure_in),
            createData('Feels like', weather.current.feelslike_c),
            createData('Wind speed (kph)', weather.current.wind_kph),
        ];
        setInfo({
            country: weather.location.country,
            text: weather.current.condition.text,
            icon: weather.current.condition.icon,
            region: weather.location.region,
        });
        return rows;
    }

    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchRows = async () => {
            const fetchedRows = await getRows();
            setRows(fetchedRows);
        };

        fetchRows();
    }, [city]);

    return (
        <TableContainer className='w-full' component={Paper}>
            {
                rows == 400 ? (<Alert severity="error">Invalid search.</Alert>)
                    : (<div className='w-full' align="center">
                        <h1 className='flex items-center justify-center text-3xl'><img style={{ verticalAlign: "middle" }} src={info.icon} alt="icon" />{info.text}</h1>
                        <Table className='rounded-xl w-full' aria-label="simple table">
                            <TableHead>
                                <TableRow className='bg-black'>
                                    <TableCell style={{ fontWeight: 700, color: 'white' }}>{city}</TableCell>
                                    <TableCell style={{ fontWeight: 700, color: 'white' }}>{info.region}, {info.country}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        
                                        key={row.conditions}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                    >
                                        <TableCell  component="th" scope="row">
                                            {row.conditions}
                                        </TableCell>
                                        <TableCell align="right">{row.values}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>)
            }
        </TableContainer>
    );
}
