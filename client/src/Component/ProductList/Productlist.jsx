import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
//yeni ürünlerin rastgele veya ilk 4ü gösterilecek
import { useState } from 'react';

import './ProductList.css'


const ProductList = ({ type }) => {
    //TODO Apiden sadece 4 tane yeni ürün çekilecek.. Filtreleme işlemi sorgu sırasına olacak
    const [wrap, setWrap] = useState('nowrap')
    const [gap, setGap]  = useState('5%')

    const data = [{
        id: 0,
        title: "Artemis Vanessta Halı Krem Bel",
        img: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
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
        oldPrice: 2000,
        price: 1000,
        isNew: true,
        isDiscount: true,
        isFreeCargo: false

    },
    {
        id: 3,
        title: "Artemis Vanessta Halı Krem Bej",
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
        oldPrice: 1800,
        price: 1500,
        isNew: false,
        isDiscount: false,
        isFreeCargo: false,

    },

    ]
    useEffect(() => {
        if (type == 'all') {
            setWrap('wrap')
            setGap('12px')
        }
    }, []);


    const newproducts = data.filter((e) => {
        if (type === "special") {
            return e.isDiscount;
        }
        if (type === "all") {

            return e;
        }
        return e.isNew
    })

    return (
        <div className='n-product' style={{ flexWrap: wrap, gap: gap }}>
            {
                newproducts.splice(0, type === 'all' ? newproducts.length : 4).map(item => (
                    <div className="product-container" key={item.id
                    }>
                        <div className="img_wrapper">

                            <img src={item.img} alt="" />
                        </div>
                        <span>{item.title}</span>
                        <div className="Buttons">
                            <button className='Detay-button'>
                                <Link className='link-detay' to={`/product/${item.id}`} >Detay</Link>
                            </button>
                            <button className='shop-button'>
                                Sepete Ekle
                            </button>
                        </div>

                        <div className="prices">
                            <span>{item.price}₺</span>
                            {item.isDiscount && <span>{item.oldPrice}₺</span>}

                        </div>
                        {
                            item.isNew &&
                            <div className="p-new">

                                <span>Yeni Ürün</span>
                            </div>
                        }
                        {item.isFreeCargo && <div className="pf-cargo">
                            <span>Ücretsiz Kargo</span>

                        </div>}
                        {item.isDiscount && <div className="p-discount"><span>İndirimli Ürün</span></div>}
                    </div>
                ))

            }
        </div>
    )
}

export default ProductList
