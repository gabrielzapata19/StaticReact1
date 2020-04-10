import React from 'react';
import './search-box.css';

/**
 * Functional Componentes such as bellow do not have access to state 
 * and lifestyle methods
 * 
 * They are used to only render jsx
 * 
 */
export const SearchBox = ({placeholder, handleChange}) =>(
    //className is used to reference thesytles css file
    <input 
        className = 'search'
        type='search'
        placeholder={placeholder}
        onChange = {handleChange}
      />
);