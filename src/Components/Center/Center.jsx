import React from 'react'
import './center.css'
import { Link } from 'react-router-dom'
import image6 from '../../assets/images/image6.jpg'

const Center = () => {
  return (
    <div className='gpt3__centers'>
       <div className='gpt3__centers-content'>
         
        <img src={image6} alt="center" />
        
        <div className='gpt3__centers-content_flex'>
        <div className='gpt3__centers-content_texts'>
            <h1>You Can Talk to Someone no matter what the challenge is.</h1>
            <p>There are competent & Spirit filled Counsellors, Pastors
             & Ministers willing to speak with you at any time. Don't keep it all in, speak to someone now.</p>
        </div>
          
        <div className='gpt3__centers-button'>
            <Link to="/what"  >
              <button>Know More</button>
            </Link>
        </div>
        </div>
   
        

       </div>
    </div>
  )
}

export default Center