import React, { useState, useEffect } from 'react'
import { FormControl, MenuItem, Select, InputLabel, Stack } from '@mui/material'
import { ContextState } from '../context/Context';

const Filter = () => {
    const {
        userDispatch,
        userState: { available, gender, domain},
    } = ContextState();
    const [avail, setAvail] = useState('');
    const [gen, setGender] = useState('');
    const [dom, setDomain] = useState('');
    
    // console.log(avail, gen, dom);
    const handleChangeAvailability = (e) => {
        // console.log(e.target.value);
        setAvail(e.target.value);
        return userDispatch({
            type : 'FILETR_BY_AVAILABLE',
            payload : {avail}
        })
    } 
    
    return (
        <div className='filter-main'>
            <FormControl fullWidth sx={{
                marginBottom : '10px',
            }}>

                <InputLabel id="available">Availability</InputLabel>
                <Select
                    labelId="Available"
                    id="available-select-label"
                    value={avail}
                    label="available"
                    onChange={(e) => {
                        setAvail(e.target.value);
                        return userDispatch({
                            type : 'FILTER_BY_AVAILABLE',
                            payload : {avail}
                        })
                    }}
                >
                    <MenuItem value={true}>Available</MenuItem>
                    <MenuItem value={false}>Unavailable</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{
                marginBottom : '10px',
            }}>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                    labelId="gender-select-label"
                    id="demo-simple-select"
                    value={gen}
                    label="Age"
                    onChange={(e) => {
                        setGender(e.target.value);
                        return userDispatch({
                            type: 'FILTER_BY_GENDER',
                            payload: { gen }
                        })
                    }}
                >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{
                marginBottom : '10px',
            }}>
            <InputLabel id="gender">Domain</InputLabel>
                <Select
                    labelId="domain-select-label"
                    id="demo-simple-select"
                    value={dom}
                    label="Age"
                    onChange={(e) => {
                        setDomain(e.target.value);
                        return userDispatch({
                            type: 'FILTER_BY_DOMAIN',
                            payload: { dom }
                        })
                    }}
                >
                    <MenuItem value="Finance">Finance</MenuItem>
                    <MenuItem value="Sales">Sales</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Management">Management</MenuItem>
                    <MenuItem value="Ui Design">UI Design</MenuItem>
                    <MenuItem value="IT">IT</MenuItem>
                </Select>
            </FormControl>
        </div >
    )
}

export default Filter;
