

import React, { useState } from 'react';

import FormControl from '@mui/material/FormControl';


import Autocomplete from './AutocompleteBar.js';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


// icons
// import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
// import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import SearchIcon from '@mui/icons-material/Search';


import Logo from './NavPhotos/Logo.png'

function Nav() {
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
                <div className='colLogoDiv'>

                    <img src={Logo} alt="Logo" className='Logo' />
                    <button className='SearchBarNavBtn rowLocation'>
                        {/* <PinDropOutlinedIcon /> */}

                        <div>

                            <p className='ColButton'>
                                Deliver to <span>John</span>
                            </p>
                            <h6 className='btnBold'>Olrando 32809</h6>
                        </div>

                    </button>
                </div>


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
                    <Autocomplete />
                    <button className='orangeBtn'>
                        {/* <SearchIcon /> */}
                    </button>
                </div>


                <div className='rowBtn'>
                    <button className='SearchBarNavBtn '>
                        {/* <OutlinedFlagIcon /> */}
                        EN</button>
                    <button className='SearchBarNavBtn'>
                        <a href='/login' className='noneLink'>
                            Hello, John <h6 className='btnBold'>Account & Lists</h6>
                        </a>
                    </button>
                    <button className='SearchBarNavBtn '>
                        <div>
                            Returns<h6 className='btnBold'>& Orders</h6>
                        </div>
                    </button>
                    <button className='SearchBarNavBtn shoppingCartBtn' ><h6 className='btnBold'>
                        {/* < ShoppingCartOutlinedIcon /> */}
                        Cart</h6></button>

                </div>
            </div>

        </>

    );
}

export default Nav;