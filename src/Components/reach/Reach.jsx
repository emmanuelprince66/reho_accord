import React from 'react'
import Textsms from '@mui/icons-material/Textsms';
import './reach.css'

const Reach = () => {
  return (
    <div className='gpt3__reach'>
        <div className='gpt3__reach-content'>
          <a 
          href="https://wa.me/+2348168465081"
          target="_blank"
          rel="noreferrer"
          >
          <span className='gpt3__reach-content_svg'>
          <Textsms sx={{ color:'blue' , height:'30px' , width:"30px" }} />
        </span>
          </a>
            
        </div>
      
    </div>
  )
}

export default Reach