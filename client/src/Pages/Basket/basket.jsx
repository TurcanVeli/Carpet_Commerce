import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import './basket.css'

const Basket = () => {
    const basket_fake_info = [
        {
            id: 0,
            title: "Artemis Vanessta Halı Krem Bel",
            img: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
            price: 1600,
        },
        {
            id: 0,
            title: "Artemis Vanessta Halı Krem Bel",
            img: "https://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
            price: 1600,
        }
    ]


    return (
        <div className='basket'>

            {
                basket_fake_info.length === 0 ? (
                    <div className="basket_container">
                        <div className="no_product_wrapper">
                            <div className="error_icon">

                                <ErrorIcon />

                            </div>
                            <div className="basket_info">
                                Alışveriş sepetinizde ürün bulunmamaktadır.
                            </div>
                        </div>
                    </div>
                )
                    : (
                        <div className="basket_product">
                            <div className="basket_left">
                                <div className="basket_product_container">
                                    <div className="basket_product_title">
                                        SEPET DETAYI
                                    </div>
                                    {
                                        basket_fake_info.map(item => (
                                            <div className="basket_product_info_container" key={item.id}>

                                                <div className="carpet_img_wrapper">
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="basket_title_and_button_container">
                                                    <div className="basket_product_title_wrapper">

                                                        <h3>{item.title}</h3>
                                                    </div>

                                                    <div className="basket_delete_container">
                                                        <DeleteIcon/>
                                                        
                                                    </div>
                                                    
                                                </div>
                                                <div className="basket_count_product">
                                                        <div className="basket_count_container">
                                                            <div className="basket_plus">-</div>
                                                            <div className="basket_count">1</div>
                                                            <div className="basket_minus">+</div>
                                                        </div>
                                                </div>
                                                <div className="basket_left_price">
                                                    <div className="basket_price">

                                                        1.382,67 TL
                                                    </div>
                                                    <div className="kdv">
                                                 + KDV % 8
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="go_back_shopping_container">

                                    </div>

                                </div>
                           
                            </div>
                            <div className="basket_right">
                                <div className="basket_abstract">
                                    <div className="abstract-title">
                                        <h3>Sepet Özeti</h3>
                                    </div>
                                    <div className="basket_money_info">

                                        <div className="ara_toplam">
                                            <p>Ara Toplam</p>
                                            <h3>10000tl</h3>
                                        </div>
                                        <div className='kdv_toplami'>
                                        <p>KDV</p>
                                        <h3>300tl</h3>
                                            
                                        </div>
                                        <div className="kdv_dahil">
                                        <p>KDV Dahil</p>
                                            <h3>103000tl</h3>
                                            
                                        </div>
                                    </div>
                                    <div className="basket_total_result">
                                        <div className="result-info-container">

                                            <p>Toplam</p>
                                            <h3>13000tl</h3>
                                        </div>
                                            
                                        <div className="done_shooping">
                                            alışverişi tamamla
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>)


            }

        </div>
    )
}

export default Basket
