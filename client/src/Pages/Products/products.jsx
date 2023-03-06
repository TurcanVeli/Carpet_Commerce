import React from 'react'
import ProductList from '../../Component/ProductList/Productlist'

import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import './products.css'
const Products = () => {


  return (
    <div className='products'>
      <div className="page_links">
        <div className="path_links">
          <h4>anasayfa > </h4>
          <h4 className='artemis'>Artemis Halı Koleksiyonu</h4>
        </div>
        <div className="previous_page">
          <h4>Sıralama Seçiniz</h4>
          <KeyboardArrowDownSharpIcon />
        </div>
      </div>

      <ProductList type='all' />
      
    </div>
  )
}

export default Products
