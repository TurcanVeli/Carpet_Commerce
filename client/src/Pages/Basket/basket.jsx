import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import './basket.css'

const Basket = () => {
    const basket_fake_info = [
      
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
                                                <div className="title_and_button_container">
                                                    <div className="basket_product_info_title">
                                                        <h3>{item.title}</h3>
                                                    </div>
                                                    <div className="basket_delete_container">
                                                        
                                                        <DeleteIcon/>
                                                        <h4>Sepeti Sil</h4>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="go_back_shopping_container">

                                    </div>

                                </div>
                                <div className="gift_code_container">

                                </div>
                            </div>
                            <div className="basket_right">
                                <div className="basket_abstract">

                                </div>
                            </div>
                        </div>)


            }

        </div>
    )
}

export default Basket
