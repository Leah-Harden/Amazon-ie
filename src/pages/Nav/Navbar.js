
import * as React from 'react';


import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Autocomplete from '@mui/material/Autocomplete';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Logo from './NavPhotos/Logo.png'

function Nav() {
    const options = ['The Godfather', 'Pulp Fiction'];

    const currencies = [
        {
            value: 'EUR',
            label: 'All',
        },
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];
    return (
        <>
            <div className='Navbar'>
                <img src={Logo} alt="Logo" className='Logo' />
                <button className='SearchBarNavBtn rowLocation'>
                    <PinDropOutlinedIcon />
                    <p className='ColButton'>
                        Deliver to <span>John</span> <h6>Olrando 32809</h6>
                    </p>
                </button>


                <div className='SearchBarNavAll'>

                    <FormControl className='AllSearchBar'>
                        <TextField
                            id="outlined-select-currency"
                            select
                            defaultValue="EUR"
                            helperText=""
                            className='InputLNav'
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </FormControl>
                    <Autocomplete
                        disablePortal
                        options={options}
                        className='SearchBarNav'
                        renderInput={(params) => <TextField {...params} />}
                    />
                </div>

                <button className='SearchBarNavBtn '><OutlinedFlagIcon />EN</button>
                <button className='SearchBarNavBtn' >Hello, John <h6 className='btnBold'>Account & Lists</h6></button>
                <button className='SearchBarNavBtn '>Returns<h6 className='btnBold'>& Orders</h6></button>
                <button className='SearchBarNavBtn ' ><h6 className='btnBold'>< ShoppingCartOutlinedIcon />Cart</h6></button>

            </div>

        </>

    );
}

export default Nav;