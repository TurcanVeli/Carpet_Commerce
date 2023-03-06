import React from 'react'
import { useNavigate } from "react-router-dom";
import './collection.css'
import GoToTop from '../../Component/Gototop/goTotop'
import { useEffect } from 'react';
import { useState } from 'react';

const Collection = () => {
  let navigate = useNavigate();
  const [clicked, setClicked] = useState(false)
  const handle = () => {
    setClicked(!clicked)

  }
  useEffect(() => {
    if (clicked) {
      navigate("/collection/1");
    }
  }, [clicked]);
  const colData = [
    {
      id: 1,
      title: "Artemis",
      img: "https://i.pinimg.com/736x/aa/80/a7/aa80a7293d41de8ecdd4e87b60208390.jpg",
      tag: "artemis"
    },
    {
      id: 2,
      title: "İpek Halı",
      img: "https://i.pinimg.com/736x/aa/80/a7/aa80a7293d41de8ecdd4e87b60208390.jpg",
      tag: "ipek"
    },
    {
      id: 3,
      title: "Tuğra Halı",
      img: "https://www.naturalhali.com.tr/images/kategoriler/Kreasyon-Hali-resim-119.png",
      tag: "tugra"
    },
    {
      id: 4,
      title: "Kreasyon",
      img: "https://www.naturalhali.com.tr/images/kategoriler/Kreasyon-Hali-resim-119.png",
      tag: "kreasyon"
    }
  ]


  return (
    <div className='collection'>
      <div className="title-container">

        <h1>Markalar</h1>

      </div>
      <div className="collection-list">
        {
          colData.map((item) => (
            <div onClick={() => handle()} className="img-wrapper" id={item.id}>
              <img src={item.img} alt="" />
            </div>
          ))
        }
      </div>
      <GoToTop />
    </div>
  )
}

export default Collection
