import React from 'react'


import Slider from '../../Component/Slider/slider'

import './home.scss'





const Home = () => {
  return (

    <div className="home">
      <div className="top">
        <Slider/>
        <div className="info-container">
          <div className="title">
            title
          </div>
          <div className="desc">
            desc
          </div>

        </div>
      </div>
      <div className="new-feature">
        yeni halılar
      </div>
      <div className="customer-review">
        müşteri yorumları
      </div>
    </div>
  )
}

export default Home
