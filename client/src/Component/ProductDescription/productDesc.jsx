import React, { useState, useEffect } from 'react'

import './productDesc.css'
  const ProductDesc = () => {

  const [index, setIndex] = useState(0);

  useEffect(()=>{
	
	}, [index])


  const Desc = () => {
    return (
      <div className='p_desc_container'>
        <div className="type_title">
          <h2>SILK</h2>
        </div>
        <div className="type_desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis architecto necessitatibus fugit libero fugiat doloremque autem accusantium natus repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, facere.</p>
        </div>
        <div className="properties">
          <ul>
              <h2>Özellikler</h2>
            <li>İplik Türü: Viskon</li>
            <li>Hav Yüksekliği: 5 mm</li>
            <li>Renk Paleti: Krem-Lacivert</li>
            <li>Garanti: 2 yıl</li>
          </ul>
        </div>
      </div>
    )
  }


  const Taksit = () => {
    return (
      <div>
  taksit
      </div>
    )
  }
  const Tablo = () => {
    return (
      <div className='tablo'>
        <img src="https://www.artemishali.com.tr/dosya/artemiswebsitesiolcutablosu-1.png" alt="" />
      </div>
    )
  }
  

  


  return (
    <div className='p_desc'>
        <div className="info_title">
          <div onClick={ () => setIndex(0)} className="title">
            <h3>Ürün Bilgisi</h3>
          </div>
          <div onClick={() => setIndex(1)} className="title">
          <h3>Taksit Seçenekleri</h3>
          </div>
          <div onClick={() => setIndex(2)}  className="title">
          <h3>Ölçü Tablosu</h3>
          </div>
        </div>
        <div className="desc_product">

          {index === 0? <Desc/>: index===1? <Taksit/>: <Tablo/>}
        </div>

    </div>
  )
}

export default ProductDesc
