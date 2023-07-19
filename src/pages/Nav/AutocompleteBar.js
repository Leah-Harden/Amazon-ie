import React, { useState } from 'react';

const AutocompleteBar = () => {
    // Your data for the autocomplete options
    const autocompleteData = [
        'Apple',
        'Banana',
        'Cherry',
        'Grapes',
        'Orange',
        'Pineapple',
        'Strawberry',
    ];

    // State to hold the current value of the input field
    const [value, setValue] = useState('');

    // State to hold the filtered autocomplete options
    const [filteredData, setFilteredData] = useState([]);

    // Function to handle changes to the input field
    const handleChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);

        // Filter the autocomplete options based on the input value
        const filteredOptions = autocompleteData.filter((option) =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        );

        setFilteredData(filteredOptions);
    };

    // Function to handle selecting an option from the autocomplete list
    const handleSelect = (value) => {
        setValue(value);
        setFilteredData([]); // Clear the filtered options after selection if you want
    };

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Type to autocomplete..."
            />
            {filteredData.length > 0 && (
                <ul>
                    {filteredData.map((option) => (
                        <li key={option} onClick={() => handleSelect(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutocompleteBar;