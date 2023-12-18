import React from 'react'

import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import ph from '../assets/images/Placeholder.jpg'

function AboutRight() {
  return (

    <>
      <div className='aboutRight'>

        <img src={card1} alt="card1" className='rightcard' />

        <img src={card2} alt="card2" className='rightcard2' />

        <img src={ph} alt="placeholder" className='aboutPic' />

      </div>

    </>
  )
}

export default AboutRight