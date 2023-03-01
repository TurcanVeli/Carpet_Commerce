import React from 'react'

import './collectionList.css'

const CollectionList = () => {

  const data = [{
    id:1,
    title: "Artemis Halı",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },
  {
    id:2,
    title: "Kreasyon",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },
  {
    id:3,
    title: "Tuğra Halı",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },
  {
    id:4,
    title: "İpek Carpet",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },
  {
    id:5,
    title: "Veli Carpet",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },

  ]

  return (
    <div className='c-list'>
      {
         data.splice(0,4).map(item => (
          <div className="c-card" key={item.id}>
              <div className="desc">
                <p>Koleksiyon özeti: Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>Detay için tıklayınız..</p>
              </div>
              
              <img src={item.img} alt="" />
            <span className='c-title'>{item.title}</span>
          </div>
        ))
      }

    </div>
  )
}

export default CollectionList
