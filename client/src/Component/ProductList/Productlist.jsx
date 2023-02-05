import React from 'react'

//yeni ürünlerin rastgele veya ilk 4ü gösterilecek

import './ProductList.css'


const ProductList = ({type}) => {
    //TODO Apiden sadece 4 tane yeni ürün çekilecek.. Filtreleme işlemi sorgu sırasına olacak
    const data = [{
        title: "Artemis Vanessta Halı Krem Bel",
        img: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
        oldPrice: 1800,
        price: 1500,
        isNew: true,
        isDiscount: false,
        isFreeCargo: true

    },
    {
        title: "Artemis Vanessta Halı Krem Bej",
        img: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
        oldPrice: 1800,
        price: 1500,
        isNew: true,
        isDiscount: true,
        isFreeCargo: false,

    },
    {
        title: "Artemis Vanessta Halı Krem Bej",
        img: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
        oldPrice: 1800,
        price: 1500,
        isNew: true,
        isDiscount: true,
        isFreeCargo: false

    },
    {
        title: "Artemis Vanessta Halı Krem Bej",
        img: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
        oldPrice: 1800,
        price: 1500,
        isNew: false,
        isDiscount: true,
        isFreeCargo: false,

    },
    {
        title: "Veli Carpet",
        img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",
        oldPrice: 1800,
        price: 1500,
        isNew: true,
        isDiscount: false,
        isFreeCargo: true

    },

    ]

    const newproducts = data.filter((e) => {
        if(type === "special"){
            return e.isDiscount;
        }
        return e.isNew
    })


    return (
        <div className='n-product'>
            {
                newproducts.splice(0, 4).map(item => (
                    <div className="product-container">
                        <div className="img-wrapper">
                            <img src={item.img} alt="" />
                            <span>{item.title}</span>
                        </div>
                        
                        <div className="prices">
                            <span>{item.price}$</span>
                            {item.isDiscount && <span>{item.oldPrice}$</span>}
                           
                        </div>
                        <div className="p-new"><span>Yeni Ürün</span></div>
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
