import React from 'react'
import {BlurrImage} from '../../BlurrImage'
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../../Components/footer/Footer";


import { useState , useEffect } from 'react'
import { Box } from '@mui/system'
import './teachings.css'
import { collection, onSnapshot , addDoc} from "firebase/firestore";
import  db  from '../../firebase'
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
;




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    border: "1px solid #e1e5f8",
  }));

const Teachings = () => {

    const [teachings , setTeachings] = useState([])
     const [spin, setSpin] = useState(false);
    
    
    const getFunc = async () => {
    
    try {
      await onSnapshot(collection(db, "teachings"), (snapshot) => {
        setTeachings(snapshot.docs.map((doc) => ({ ...doc.data(), id : doc.id })))
        setSpin(true)
        
    })
    } catch (e) {
      setSpin(false);
      console.error("Error adding document: ", e);
    }
      
      }
      
      useEffect(() => {
        getFunc();
      }, []);
    
  return (
    <div>
    <Box sx={{ mt:'70px' ,  marginX:"auto" , mb:"100px"}}>
    <div className='gpt3__teachings-img'>
    <BlurrImage
            blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
            src="https://christembassy.org/wp-content/uploads/2019/03/god.jpg"
            punch={1}
      />
    </div>
    

    
    <div className='gpt3__teachings-contents'>
   
    {!spin ? <CircularProgress size="15rem"   /> : 
    
    
    teachings.map((teaching) => {

 
      return (
      <div className='gpt3__teachings-grid' key={teaching.id} >
          <div className='gpt3__teachings-grid1'>
          <p>Posted At : {new Date(teaching.createdAt.seconds * 1000).toLocaleDateString("en-US")}</p>
          </div>
        <h2>{teaching.topic}</h2>
          
        <div className='gpt3__teachings-grid2'>
          <h3>BIBLE SCRIPTURES</h3>
          <h5>{teaching.verse}</h5>
          <h5>{teaching.verse2}</h5>
          <h5>{teaching.reference}</h5>
        </div>  
          <div className='gpt3__teachings-grid3'>
        
          <p>{teaching.explanation}</p>
          <p>{teaching.conclusion}</p>
          </div>
        </div> 
      
      )
      })
    
    
    }
    
    { 



}

    </div>
    </Box>
    
    <Footer />
    
    </div>
  )
}

export default Teachings