import React from 'react'

import './collection.css'

const Collection = () => {

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
      <h1>Koleksiyonlar</h1>
      </div>
      <div className="collection-list">
        {
          colData.map((item) => (
            <div className="img-wrapper" id={item.id}>
              <img src={item.img} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Collection
