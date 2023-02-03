import React from 'react'

import './searchButton.scss'


import SearchIcon from '@mui/icons-material/Search';

const Searchbutton = () => {
  return (
    <div className="form-field">
        <input
   type="text"
   placeholder="Search here"
     />
    <SearchIcon className='search-icon'/>
    </div>
  )
}

export default Searchbutton;
