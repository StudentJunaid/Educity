import React from 'react'
import './Campus.css'
import Gellery_1 from '../../assets/gallery-1.png'
import Gellery_2 from '../../assets/gallery-2.png'
import Gellery_3 from '../../assets/gallery-3.png'
import Gellery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

function Campus() {
  return (
    <div className='Campus'>
        <div className="gellery">
            <img src={Gellery_1} alt="" />
            <img src={Gellery_2} alt="" />
            <img src={Gellery_3} alt="" />
            <img src={Gellery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See More here<img src={white_arrow} alt="dark-arrow" /></button>
    </div>
  )
}

export default Campus