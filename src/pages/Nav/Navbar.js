
import * as React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

function Nav() {
    const options = ['The Godfather', 'Pulp Fiction'];


    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div>
                <img></img>
                <Button variant="text">Text</Button>
                <div>

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}

                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <div>

                        <Button variant="text">EN</Button>
                        <Button variant="text">Hello, John <h6>Account & Lists</h6></Button>
                        <Button variant="text">Returns<h6>& Orders</h6></Button>
                        <Button variant="text"><h6>Cart</h6></Button>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Nav;