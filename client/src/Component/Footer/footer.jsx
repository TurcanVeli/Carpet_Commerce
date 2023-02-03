import React from 'react'


//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import { Link } from "react-router-dom";


import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="adress">
        <span>Adres</span>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, pariatur?</span>
      </div>
      <div className="links">
        <Link className='link' to="/contact/">Bize Ulaşın</Link>
      </div>
      <div className="social">
        <h5>Bizi Takip Edin</h5>
        <span>
          <FacebookIcon />
        </span>
        <span>
          <InstagramIcon />
       </span>
        <span>
          <TwitterIcon />
        </span>
      </div>
      <div className="turn-navbar-button">
        <KeyboardArrowUpIcon className='up-arrow' />
      </div>

    
    </div>



  )
}

export default Footer
