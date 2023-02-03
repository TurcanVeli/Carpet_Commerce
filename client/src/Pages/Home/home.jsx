import React from 'react'


import Slider from '../../Component/Slider/slider'

import './home.scss'





const Home = () => {
  return (

    <div className="home">
      <Slider/>
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
