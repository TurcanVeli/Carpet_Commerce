import React from 'react'

import './searchButton.css'


import SearchIcon from '@mui/icons-material/Search';

const Searchbutton = () => {
  return (
    <div className="form-field">
        <input
   type="text"
   placeholder="Evin için ne arıyorsun"
     />
    <SearchIcon className='search-icon'/>
    </div>
  )
}

export default Searchbutton;
