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


    return (
        <div className="autocomplete-wrapper">
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Type to autocomplete..."
                className="autocomplete-input"
            />
            {filteredData.length > 0 && (
                <ul className="autocomplete-dropdown">
                    {filteredData.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="autocomplete-option"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutocompleteBar;