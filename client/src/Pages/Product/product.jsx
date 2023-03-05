import React from 'react'

import { useParams } from "react-router-dom";
import { useState } from 'react'
import './product.css'
import { Link } from "react-router-dom";
import ProductDesc from '../../Component/ProductDescription/productDesc';
import ProductList from '../../Component/ProductList/Productlist';

import GoToTop from '../../Component/Gototop/goTotop';

const Product = () => {
  const data = [{
    id: 1,
    title: "Artemis Palace 08020A Krem Vizon Halı",
    img1: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
    img2: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
    oldPrice: 1900,
    price: 15200,
    isNew: true,
    isDiscount: false,
    isFreeCargo: true

  },
  {
    id: 2,
    title: "Artemis Palace 08020A Krem Vizon Halı",
    img1: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
    img2: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
    oldPrice: 1800,
    price: 1200,
    isNew: true,
    isDiscount: true,
    isFreeCargo: false,

  },
  {
    id: 3,
    title: "Artemis Palace 08020A Krem Vizon Halı",

    img1: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
    img2: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
    oldPrice: 1800,
    price: 1100,
    isNew: true,
    isDiscount: true,
    isFreeCargo: false

  },
  {
    id: 4,
    title: "Artemis Palace 08020A Krem Vizon Halı",
    img1: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
    img2: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
    oldPrice: 1800,
    price: 1000,
    isNew: false,
    isDiscount: true,
    isFreeCargo: false,

  },
  {
    id: 5,
    title: "İpek vansessta Halı",
    img1: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
    img2: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
    oldPrice: 3800,
    price: 2500,
    isNew: true,
    isDiscount: true,
    isFreeCargo: true

  },

  ]
  const [selectedImage, setSelectedImage] = useState('img1')


  const id = useParams().id

  return (
    <div className='product'>
      <div className="page_links">
        <div className="page_path">
          <h4>Anasayfa  Artemis Halı Koleksiyonu  Artemis Vanessta Halı Krem Bej </h4>
        </div>
        <div className="previous_page">
          <h4>Önceki Sayfaya geri dön</h4>
        </div>
      </div>
      <div className="center-product">


        <div className="left-product">
          <div className="images-product">
            <div className="small_imgs">

              <img  onClick={e => setSelectedImage('img1')} src={data[id].img1} alt="" />
              <img onClick={e => setSelectedImage('img2')} src={data[id].img2} alt="" />
            </div>
            <div className="main_img_wrapper">
              <img src={data[id][selectedImage]} alt="" />
            </div>

          </div>
        </div>
        <div className="right-product">
          <div className="product_info_container">
            <h1>{data[id].title}</h1>
            <h3>{data[id].price}₺</h3>
          </div>
          <div className="buttons"></div>
          <div className="product_info">
            <div className="info_container">
              <div className="info_1">
                <div className="info_1_title_wrapper">
                  <h4>Kategori       </h4>
                  <h4>Garanti süresi </h4>
                  <h4>Ebat Seçiniz   </h4>
                </div>
                <div className="info_1_semi_wrapper">
                  <h4>:</h4>
                  <h4>:</h4>
                  <h4>:</h4>
                </div>
              </div>
              <div className="info-2">
                <h4>Silk</h4>
                <h4>2 Yıl</h4>
                <h4>2x4 grid</h4>
              </div>
            </div>
            <div className="info_buttons">
              <span>Tavsiye Et</span>
              <span>Sayfayı Yazdır</span>
              <span>Yorum Yaz</span>
              <span>Soru Sor</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_info_product">
        <ProductDesc/>
      </div>
      <div className="subTitle">
        <h3>Benzer Ürünler</h3>
        <hr />
        <Link className="link" to="/specialproducts" style={{ fontSize: `${10}px` }}>Tümünü gör</Link>
      </div>

        <ProductList type="special" />
        <GoToTop />
    </div>
  )
}

export default Product
