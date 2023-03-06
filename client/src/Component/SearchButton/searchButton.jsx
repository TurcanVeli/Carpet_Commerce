import React from 'react'

import './searchButton.css'


import SearchIcon from '@mui/icons-material/Search';

const Searchbutton = () => {
  return (
    <div className="form_field">
      <form  action="">

          <input
      type="text"
      placeholder="Evin için ne arıyorsun?"
      className='yakup'
        />

      </form>
    <SearchIcon className='search-icon'/>
  </div>
  )
}

export default Searchbutton;
