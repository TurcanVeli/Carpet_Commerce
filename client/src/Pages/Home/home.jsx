import React from 'react'

import './home.css'
import Slider from '../../Component/Slider/slider'
import CollectionList from '../../Component/CollectionList/collectionList';


import { Link } from "react-router-dom";
import ProductList from '../../Component/ProductList/Productlist';


const Home = () => {
  return (

    <div className="home">
      <Slider />
      <div className="subTitle">
        <h3>Koleksiyonlarımız</h3>
        <hr />
        <Link className="link" to="/collections" style={{ fontSize: `${10}px` }}>Tümünü gör</Link>
      </div>
      <CollectionList />
      <div className="subTitle">
        <h3>Yeni Ürünler</h3>
        <hr />
        <Link className="link" to="/newproducts" style={{ fontSize: `${10}px` }}>Tümünü gör</Link>
      </div>
      <ProductList type="new" />
      <div className="subTitle">
        <h3>Kampanyalı Ürünler</h3>
        <hr />
        <Link className="link" to="/specialproducts" style={{ fontSize: `${10}px` }}>Tümünü gör</Link>
      </div>
      <ProductList type="special" />
    </div>
  )
}

export default Home
