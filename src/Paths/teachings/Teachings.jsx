import React from 'react'
import { useState , useEffect } from 'react'
import { Box } from '@mui/system'
import './teachings.css'
import { collection, onSnapshot , addDoc} from "firebase/firestore";
import  db  from '../../firebase'
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



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
    
    const getFunc = async () => {
        await onSnapshot(collection(db, "teachings"), (snapshot) => {
            setTeachings(snapshot.docs.map((doc) => ({ ...doc.data(), id : doc.id })))
        })
      }
      useEffect(() => {
        getFunc();
      }, []);
    
  return (
    <div>
    <Box sx={{ mt:'70px' ,  marginX:"auto" , mb:"100px"}}>
    <div className='gpt3__teachings-img'>
       <img src="https://christembassy.org/wp-content/uploads/2019/03/god.jpg" alt="word-img" />
    </div>
    

    
    <div className='gpt3__teachings-contents'>
    
    { 
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

    </div>
    </Box>
    
    
    </div>
  )
}

export default Teachings