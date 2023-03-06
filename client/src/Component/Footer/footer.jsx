import React from 'react'


//icons

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import { Link } from "react-router-dom";


import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="column-footer">
        <span className="title-footer">Popüler Konular</span>
        <Link className='Link' to='/'>- Salon Halıları</Link>
        <Link className='Link' to='/'>- Antre Halıları</Link>
        <Link className='Link' to='/'>- Yuvarlak Halılar</Link>
        <Link className='Link' to='/'>- Çocuk ve Genç Odası</Link>
        <Link className='Link' to='/'>- Bahçe Halıları</Link>
      </div>
      <div className="column-footer">
        <span className="title-footer">Alışveriş Bilgileri</span>
        <Link className='Link' to='/'>- Sipariş Bilgileri</Link>
        <Link className='Link' to='/'>- Sepetim</Link>
        <Link className='Link' to='/'>- İade Taleplerim</Link>
        <Link className='Link' to='/'>- Sipariş Takipi</Link>
        <Link className='Link' to='/'>- Hesabım</Link>
      </div>
      <div className="column-footer">
        <span className="title-footer">Müşteri Hizmetleri</span>
        <Link className='Link' to='/'>- Canlı Destek</Link>
        <Link className='Link' to='/'>- Yardım</Link>
        <Link className='Link' to='/'>- Garanti ve İade</Link>
        <Link className='Link' to='/'>- Sıkça Sorulan Sorular</Link>
      </div>
      <div className="column-footer">
        <span className="title-footer">Müşteri Hizmetleri</span>
        <Link className='Link' to='/'>- Hakkımızda</Link>
        <Link className='Link' to='/'>- İletişim</Link>
        <Link className='Link' to='/'>- K.V.K.K.</Link>
        <Link className='Link' to='/'>- Bayilik Başvurusu</Link>
      </div>
      <div className="column-footer">
        <span className="title-footer">Müşteri Hizmetleri</span>
        <h3>Kampanyalarımızdan ve indirimlerimizden güncel olarak haberdar olun.</h3>
        <div className="mail-wrapper">
          <input
            type="text"
            placeholder="E-posta adresinizi yazın.."
          />
          <button>Gönder</button>
        </div>
      </div>
    </div>



  )
}

export default Footer
