import React from 'react'
import './collectionList.css'

import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';


const CollectionList = () => {



  const [clicked, setClicked] = useState(false)
  let navigate = useNavigate();
  const handle = () => {
    setClicked(!clicked)

  }
  useEffect(() => {
    if (clicked) {
      navigate("/collection/1");
    }
  }, [clicked]);
  const data = [{
    id: 1,
    title: "Artemis Halı",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1HvkBiblekAtdsvRwV67NIMKyco3RK91COm-stwxwvM_Ht4OYITKTasUcBbkIQyljS0&usqp=CAU",

  },
  {
    id: 2,
    title: "Kreasyon",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },
  {
    id: 3,
    title: "Tuğra Halı",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },
  {
    id: 4,
    title: "İpek Carpet",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },
  {
    id: 5,
    title: "Veli Carpet",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },

  ]

  return (
    <div className='c-list'>

      {
        data.splice(0, 4).map(item => (

          <div onClick={() => handle()} className="c-card" key={item.id}>
            <div className="desc">
              <p>Koleksiyon özeti: Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Detay için tıklayınız..</p>
            </div>
            <div className="col-img-wrapper">

              <img src={item.img} alt="" />
            </div>
            <span className='c-title'>{item.title}</span>
          </div>

        ))
      }

    </div>


  )
}

export default CollectionList
