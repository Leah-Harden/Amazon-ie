

import React, { useState } from 'react';

import FormControl from '@mui/material/FormControl';


import Autocomplete from '@mui/material/Autocomplete';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


// icons
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';


import Logo from './NavPhotos/Logo.png'

function Nav() {
    const autocompleteData = [
        'Apple',
        'Banana',
        'Cherry',
        'Grapes',
        'Orange',
        'Pineapple',
        'Strawberry',
    ];

    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);

        const filteredOptions = autocompleteData.filter((option) =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        );

        setFilteredData(filteredOptions);
    };

    const handleSelect = (value) => {
        setValue(value);
        setFilteredData([]);
    };

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

                    <div>

                        <p className='Colbotton'>
                            Deliver to <span>John</span>
                        </p>
                        <h6 className='btnBold'>Olrando 32809</h6>
                    </div>

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
                    <div>
                        <input
                            className='searchInput'
                            type="text"
                            value={value}
                            onChange={handleChange}
                            placeholder="Type to autocomplete..."
                        />
                        {filteredData.length > 0 && (
                            <ul className='ulNavBar'>
                                {filteredData.map((option) => (
                                    <li className='liNavBar'
                                        key={option} onClick={() => handleSelect(option)}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button className='orangeBtn'>
                        <SearchIcon />
                    </button>
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