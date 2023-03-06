import React, { useEffect } from 'react'

import { useParams } from "react-router-dom";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './product.css'
import { Link } from "react-router-dom";
import ProductDesc from '../../Component/ProductDescription/productDesc';
import ProductList from '../../Component/ProductList/Productlist';
import Zoom from 'react-img-zoom'
import GoToTop from '../../Component/Gototop/goTotop';
import ReactImageMagnify from 'react-image-magnify';
const Product = () => {
  const navigate = useNavigate();
  const data = [{
    id: 0,
    title: "Artemis Vanessta Halı Krem Bel",
    img: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
    img2: "https://st2.myideasoft.com/idea/gj/35/myassets/products/537/bella-z490d.jpg?revision=1620397026",
    oldPrice: 2800,
    price: 1600,
    isNew: true,
    isDiscount: false,
    isFreeCargo: true

},
{
    id: 1,
    title: "Artemis Vanessa 06152B Bej Krem Halı",
    img: "https://st1.myideasoft.com/idea/gj/35/myassets/products/710/6-murano-09164c-yeni_min.jpg?revision=1652875518",
    img2: "https://st1.myideasoft.com/idea/gj/35/myassets/products/555/vanessa-z591b-1.jpg?revision=1620397564",
    oldPrice: 1400,
    price: 1200,
    isNew: true,
    isDiscount: true,
    isFreeCargo: false,

},
{
    id: 2,
    title: "Artemis Bella 06471B Lacivert Terra",
    img: "https://st2.myideasoft.com/idea/gj/35/myassets/products/678/10-mina-09107b_min.jpg?revision=1652862382",
    img2: "https://st1.myideasoft.com/idea/gj/35/myassets/products/555/vanessa-z591b-1.jpg?revision=1620397564",
    oldPrice: 2000,
    price: 1000,
    isNew: true,
    isDiscount: true,
    isFreeCargo: false

},
{
    id: 3,
    title: "Artemis Vanessta Halı Krem Bej",
    img2: "https://st1.myideasoft.com/idea/gj/35/myassets/products/555/vanessa-z591b-1.jpg?revision=1620397564",
    img: "https://st2.myideasoft.com/idea/gj/35/myassets/products/678/10-mina-09107b_min.jpg?revision=1652862382",
    oldPrice: 2800,
    price: 2500,
    isNew: false,
    isDiscount: true,
    isFreeCargo: false,

},
{
    id: 4,
    title: "Artemis Alegra 09105B Gri Gold Halı",
    img: "https://st2.myideasoft.com/idea/gj/35/myassets/products/687/8-alegra-09100a_min.jpg?revision=1652881909",
    img2: "https://st1.myideasoft.com/idea/gj/35/myassets/products/555/vanessa-z591b-1.jpg?revision=1620397564",
    oldPrice: 1800,
    price: 1500,
    isNew: true,
    isDiscount: true,
    isFreeCargo: true

},
{
    id: 5,
    title: "Artemis Vanessa 06152B Bej Krem Halı",
    img: "https://st1.myideasoft.com/idea/gj/35/myassets/products/555/vanessa-z591b-1_min.jpg?revision=1620397564",
    img2: "https://st1.myideasoft.com/idea/gj/35/myassets/products/555/vanessa-z591b-1.jpg?revision=1620397564",
    oldPrice: 1800,
    price: 3500,
    isNew: false,
    isDiscount: false,
    isFreeCargo: false,

},
{
    id: 6,
    title: "Artemis Murano 09164C Bej Lacivert Halı",
    img: "https://st1.myideasoft.com/idea/gj/35/myassets/products/717/3-dior-09147a-yeni_min.jpg?revision=1652879496",
    img2: "https://st1.myideasoft.com/idea/gj/35/myassets/products/555/vanessa-z591b-1.jpg?revision=1620397564",
    oldPrice: 1800,
    price: 2540,
    isNew: false,
    isDiscount: false,
    isFreeCargo: false,

},
{
    id: 7,
    title: "Artemis Vanessta Halı Krem Bej",
    img: "https://st3.myideasoft.com/idea/gj/35/myassets/products/670/3-mina-09099d_min.jpg?revision=1652861615",
    img2: "https://st1.myideasoft.com/idea/gj/35/myassets/products/555/vanessa-z591b-1.jpg?revision=1620397564",
    oldPrice: 1800,
    price: 1500,
    isNew: false,
    isDiscount: false,
    isFreeCargo: false,

},

]

  const [selectedImage, setSelectedImage] = useState('img')

  const handleClick = () => navigate(-1);

  useEffect(() => {
    console.log(2)
    console.log(selectedImage)
  }, [selectedImage]);

  const id = useParams().id

  return (
    <div className='product'>
      <div className="page_links">
        <div className="page_path">
          <h4>Anasayfa > </h4>
          <h4>Artemis Halı Koleksiyonu > </h4>
          <h4 className='title_link'>{data[id].title}</h4>
        </div>
        <div className="previous_page">
          <h4 onClick={handleClick} >Önceki Sayfaya geri dön</h4>
        </div>
      </div>
      <div className="center-product">


        <div className="left-product">
          <div className="images-product">
            <div className="small_imgs">

              <img onClick={e => setSelectedImage('img')} src={data[id].img} alt="" />
              <img onClick={e => setSelectedImage('img2')} src={data[id].img2} alt="" />
            </div>
            <div className="main_img_wrapper">
              <ReactImageMagnify className='main_img' {...{
                smallImage: {
                  alt: '',
                  width: 400,
                  height: 650,
                  src: data[id][selectedImage]

                },
                largeImage: {
                  src: data[id][selectedImage],
                  width: 1600,
                  height: 1600
                }
              }} />
        

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
        <ProductDesc />
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
