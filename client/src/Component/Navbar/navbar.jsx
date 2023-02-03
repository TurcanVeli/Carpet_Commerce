import React from 'react'
import { Link } from "react-router-dom";

//icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableRowsIcon from '@mui/icons-material/TableRows';
import "./navbar.scss"
import Searchbutton from '../SearchButton/searchButton';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <div className="tab">
          <TableRowsIcon />
        </div>
        <img src="/img/logo.PNG" alt="" />
      </div>

      <div className="center">
        <div className="center-container">

        <Link className='link' to='/'>Ana Sayfa</Link>
        <Link className='link' to='/about/'>Hakkımızda</Link>
        <Link className='link' to='/collection/'>Koleksiyon</Link>
        <Link className='link' to='/contact'>İletişim</Link>
        <Link className='link' to='/salepoint'>Satış Noktamız</Link>
        </div>
      </div>


      <div className="right">
        <div className="link-container">

        <Link className='link' to='/register/'>Kayıt Ol</Link>
        <MoreVertIcon />
        <Link className='link' to='/login/'>Üye Girişi</Link>

        <ShoppingCartOutlinedIcon className='shopIcon' />

        <div className="itemcount">
          <span>1</span>
        </div>
        </div>
      <Searchbutton/>

      </div>

    </div>
  )
}

export default Navbar
