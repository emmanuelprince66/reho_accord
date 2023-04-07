import React from 'react'
import './Mapp.css'


const Mapp = () => {
  return (
    <div className='gpt3__maps'>
        <h1>Find <span className="gpt3__maps-text" >us</span> </h1>
        <div className='gpt3__maps-text-content'>
          <p>Plot 5,Block B,Odutola Odusanya close, Olorunsogo Quarters.</p>
        </div>
        <div className='gpt3__maps-content'>
          <iframe src='https://maps.google.com/maps?q=7.351533,3.890119&hl=es;&output=embed' 
          loading='lazy'
          title='map'className='gpt3__maps-iframe'></iframe>
          </div>
    </div>
  )
}

export default Mapp