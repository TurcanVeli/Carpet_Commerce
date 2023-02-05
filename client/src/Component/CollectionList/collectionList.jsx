import React from 'react'

import './collectionList.css'

const CollectionList = () => {

  const data = [{
    title: "Artemis Halı",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },
  {
    title: "Kreasyon",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },
  {
    title: "Tuğra Halı",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },
  {
    title: "İpek Carpet",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },
  {
    title: "Veli Carpet",
    img: "https://ehalicim-1.myideasoft.com/themes/selftpl_63be7a809ffce/assets/images/anasayfa/modern.jpg",

  },

  ]

  return (
    <div className='c-list'>
      {
         data.splice(0,4).map(item => (
          <div className="c-card">
            
              <img src={item.img} alt="" />
           
            <span className='c-title'>{item.title}</span>
          </div>
        ))
      }

    </div>
  )
}

export default CollectionList
