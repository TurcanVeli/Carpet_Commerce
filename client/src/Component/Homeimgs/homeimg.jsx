import React from 'react'


import './homeimg.css'

const Homeimg = () => {

    //bu kısmı isimlendiremedim, daha güzel isim konulsun.
    const adsimg = [
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQWICIYDzYpDBkaji1DYePRr3ziDoiTjoA5gV1qhKRGNsI5bxcSXaKcPX-hXE8uMYXmc&usqp=CAU",

        },
        {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALUfyq-DctU7UyP6CpUgpcQ-knIHXGPEaUagsldzVZtiKWwr4iwnCavmw-xkJtlqs4Jk&usqp=CAU",
            
        },
        {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHkpsZDAa_wrrkJNOsgEXTXy9XmfwQWP_L-kiIqt9qLLhjh43qnAwia_7kLbqL7wfef0&usqp=CAU",
            
        }
    ]


  return (

    <div className='homeimg'>
        <div className="right">
            <img src={adsimg[0].img} alt="" />
        </div>
        <div className="left">
            <img src={adsimg[1].img} alt="" />
            <img src={adsimg[2].img} alt="" />
        </div>
      
    </div>
  )
}

export default Homeimg
