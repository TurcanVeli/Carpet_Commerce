import React from 'react'

import './home.css'
import Slider from '../../Component/Slider/slider'
import CollectionList from '../../Component/CollectionList/collectionList';


import { Link } from "react-router-dom";
import ProductList from '../../Component/ProductList/Productlist';
import Homeimg from '../../Component/Homeimgs/homeimg';

import GoToTop from '../../Component/Gototop/goTotop';

const Home = () => {
  return (

    <div className="home">
      <Slider />
      <div className="subTitle">
        <h3>Markalarımız</h3>
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
      <Homeimg/>
      <div className="subTitle">
        <h3>Kampanyalı Ürünler</h3>
        <hr />
        <Link className="link" to="/specialproducts" style={{ fontSize: `${10}px` }}>Tümünü gör</Link>
      </div>
      <ProductList type="special" />
      <GoToTop />
    </div>
  )
}

export default Home
