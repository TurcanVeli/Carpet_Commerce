import React from 'react'

import './brand.css'
//import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

import GoToTop from '../../Component/Gototop/goTotop';
 
const Brand = () => {

    //const id = useParams().id

    const [clicked, setClicked] = useState(false)
    const [path, setPath] = useState(0)
    let navigate = useNavigate();

    const backPrevious = () => {
        setClicked(true)
        setPath(-1)
        console.log("prev")
    }

    const GoToProducts = () =>{
        setClicked(true)
        setPath('/products/1')
        console.log("Products")
    }

    useEffect(() => {
        if (clicked) {
            navigate(path);
            console.log("geldi")
        }
    }, [clicked]);

    const data = [{
        id: 0,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/mina-top1.jpg',
        title: "Dream"
    },
    {
        id: 1,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/mina-top1.jpg',
        title: "Mina"
    },
    {
        id: 2,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/ALEGRA-TOP.jpg',
        title: "Alegra"
    },
    {
        id: 3,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/couture.jpg',
        title: "Couture"
    },
    {
        id: 4,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/bella.jpg',
        title: "Bella"
    },
    {
        id: 5,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/palace.jpg',
        title: "Palace"
    },
    {
        id: 6,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/silk.jpg',
        title: "Silk"
    },
    {
        id: 7,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/murano.jpg',
        title: "Murano"
    },
    {
        id: 8,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/vanessa.jpg',
        title: "Vannessa"
    },
    {
        id: 9,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/dior.jpg',
        title: "Dior"
    },
    {
        id: 10,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/artex.jpg',
        title: "Artex"
    },
    {
        id: 11,
        img: 'https://www.artemishali.com.tr/class/INNOVAEditor/assets/aa/runner.jpg',
        title: "Runner"
    },
    ]

    return (
        <div className='container'>
            <div onClick={backPrevious}  className="previous_page_container">
                <h4> Önceki Sayfaya geri dön</h4>
            </div>
            <div className="col-title">
                <h2>Artemis Halı Koleksiyonu</h2>
            </div>
            <div className="collections-wrapper">

                {
                    data.map(item => (
                        <figure  onClick={GoToProducts} className="snip1401" key={item.id}>
                            <img src={item.img} alt="" />
                            <figcaption>
                                <h3>{item.title}</h3>
                                <p>Doğadan gelen dokularla çizgilerin birlikteliğinden oluşmuş tasarımlar, sadeliğin ve yalınlığın ön planda olduğu desenler... Mina Koleksiyonu’nun güzelliğiyle tanışın.</p>
                            </figcaption><i className="ion-ios-home-outline"></i>

                        </figure>
                    ))
                }

            </div>
            <GoToTop/>
        </div>
    )
}

export default Brand
