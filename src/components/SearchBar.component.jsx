import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        // make sure we call callback from parent
        onFormSubmit(searchTerm);
    };

    return (
        <div className='ui segment SearchBar'>
            <form className='ui form' onSubmit={onSubmit}>
                <div className='field'>
                    <label htmlFor='videoSearch'>Video Search</label>
                    <input
                        type='text'
                        value={searchTerm}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
