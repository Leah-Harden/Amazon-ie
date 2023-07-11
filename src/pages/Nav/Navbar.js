
import * as React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';

function Nav() {
    const options = ['The Godfather', 'Pulp Fiction'];


    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <>
            <div className='Navbar'>
                <img src='../PhotosHome/Logo.png' alt="Logo" />
                <button className='SearchBarNavBtn rowLocation'>
                    <PinDropOutlinedIcon />
                    <p className='ColButton'>
                        Deliver to <span>John</span> <h6>Olrando 32809</h6>
                    </p>
                </button>


                <div className='SearchBarNavAll'>

                    <FormControl className='AllSearchBar'>
                        <InputLabel >All</InputLabel>
                        <Select value={age}

                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <Autocomplete
                        disablePortal
                        options={options}
                        className='SearchBarNav'
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <div>

                        <Button >EN</Button>
                        <Button >Hello, John <h6>Account & Lists</h6></Button>
                        <Button >Returns<h6>& Orders</h6></Button>
                        <Button ><h6>Cart</h6></Button>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Nav;