import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

//icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TableRowsIcon from '@mui/icons-material/TableRows';
import Searchbutton from '../SearchButton/searchButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';




const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo-container">
        <img src="/img/logo.PNG" alt="" className="logo" />
      </div>
      <div className="links-container">
        <div className="l-wrapper">

          <div className="lItems">
            <HomeIcon />
            <Link className= "link" to='/' >AnaSayfa</Link>
          </div>
          <div className="lItems">
            <ShoppingCartCheckoutSharpIcon />
            <Link className= "link" to='/' >Kampanyalar</Link>
          </div>
          <div className="lItems">
            <DiamondSharpIcon />
            <Link className= "link" to='/collections' >Koleksiyonlar</Link>
          </div>
          <div className="lItems">
            <ShieldRoundedIcon />
            <Link  className= "link" to='/' >Hizmet Koşulları</Link>
          </div>
          <div className="lItems">
            <PhoneInTalkRoundedIcon />
            <Link className= "link" to='/contact' >İletişim</Link>
          </div>
        </div>
        <Searchbutton />
      </div>
      <div className="left-container">
        <div className="social-wrapper">
          <FacebookIcon className='F'/>
          <TwitterIcon className='T'/>
          <InstagramIcon className='I'/>
          <WhatsAppIcon className='W'/>
          <PhoneInTalkRoundedIcon className='P'/>
          <EmailIcon className='E' />
        </div>
        <div className="bottom-links">
          <div className="blItems">
            <PersonSharpIcon />
            <Link to='/' className="Link">Profil</Link>
          </div>
          <div to='/' className="blItems">
            <ShoppingCartOutlinedIcon />
            <Link to='/' className="Link">Sepetim</Link>
          </div>
          <div className="blItems">
            <ThumbUpAltSharpIcon />
            <Link to='/' className="Link">Favoriler</Link>
          </div>
          <div className="blItems">
            <Link to='/' className="Link">TR</Link>
            <KeyboardArrowDownSharpIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
