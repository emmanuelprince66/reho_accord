import { Box } from '@mui/system'
import { Button } from '@mui/material'
import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, onSnapshot , addDoc} from "firebase/firestore";
import  db  from '../../firebase'
import { useAuth } from '../../Components/auth'
import './saved.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { serverTimestamp } from 'firebase/firestore'


import CircularProgress from "@mui/material/CircularProgress";


const updated_at_timestamp = serverTimestamp()



const Saved = () => {
  const [spin, setSpin] = useState(false);
  const [topic, setTopic] = useState("");
  const [verse, setVerse] = useState("");
  const [reference, setReference] = useState("");
  const [verse2, setVerse2] = useState("");
  const [explanation, setExplanation] = useState("");
  const [conclusion, setConclusion] = useState("");

  const auth = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpin(true);

    try {
      const docRef = await addDoc(collection(db, "teachings"), {
        topic: topic,
        verse: verse,
        reference: reference,
        verse2: verse2,
        explanation: explanation,
        conclusion: conclusion,
        createdAt: updated_at_timestamp 
      });
      setSpin(false);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      setSpin(true);
    }

    setTopic("");
    setVerse("");
    setReference("");
    setVerse2("");
    setExplanation("");
    setConclusion("");
  };
  
  

  if(auth.user) {
     console.log(auth.user)   
  }
  else {
    console.log('bad')
  }

  const handlelogout = () => {
    auth.logout()
    navigate('/')
  } 

  const [contacts , setContacts] = useState([])
  const [testimony , setTestimony] = useState([])

  const getFunc = async () => {
    await onSnapshot(collection(db, "contacts"), (snapshot) => {
      setContacts(snapshot.docs.map((doc) => ({ ...doc.data(), id : doc.id })))
    })
  }
  const getFunc2 = async () => {
    await onSnapshot(collection(db, "testimony"), (snapshot) => {
      setTestimony(snapshot.docs.map((doc) => ({ ...doc.data(), id : doc.id })))
    })
  }


  
  useEffect(() => {
    getFunc();
    getFunc2();
  }, []);

  return (
    <Box sx={{ mt:'100px' , width:{ xs:"93%" , sm:'93%' , md:"85%" } , marginX:"auto" , mb:"100px"}}>
          
          <h3 className='gpt3__heading'>Welcome Mr &nbsp;  
                     {auth.user}
            </h3>
            
            
        <Box>
        <Tabs>
    <TabList>
      <Tab>
      <Button variant="outline">Veiw Information</Button>
      </Tab>
      <Tab>
      <Button variant="outline">Add Teachings</Button>
      </Tab>
    </TabList>

    <TabPanel>
    
    
  <Box sx={{ mt:'100px' , width:{ xs:"93%" , sm:'93%' , md:"85%" } , marginX:"auto" , mb:"100px"}}>
  <div className='general'>

    
<h4>Contacts</h4>
  <div className='gpt3__saved-contacts'>

  { 
contacts.map((contact) => {
return (
  <div className='gpt3__saved-contacts_card' key={contact.id} >
    <div className='gpt3__saved-contacts_content'>
     <h3> Name : {contact.name}</h3>
     <p><span>Address : </span> {contact.address}</p>
     <p><span>Email : </span> {contact.email}</p>
     <p><span>Phone : </span> {contact.phone}</p>
     <p><span>Prayer Req : </span> {contact.prayer}</p>
    </div>
  </div> 
)
})


}

  </div>


  <div className='gpt3__heading-testimony'>
      <h4>Testimonies</h4>
    </div>
  <div className='gpt3__saved-testimony' >
   
  { 
testimony.map((test) => {
return (
  <div className='gpt3__saved-contacts_card' key={test.id} >
    <div className='gpt3__saved-contacts_content'>
     <h3> Name : {test.name}</h3>
     <p><span>Address : </span> {test.address}</p>
     <p><span>Email : </span> {test.email}</p>
     <p><span>Phone : </span> {test.phone}</p>
     <p><span>testimony : </span> {test.testimony}</p>
    </div>
  </div> 
)
})


}

  </div>



<button className='adminBtn' onClick={handlelogout} >logout</button>
</div>
  
  </Box>
    </TabPanel>
    
    <TabPanel>
    
    <Box  sx={{ mt:'100px' , width:{ xs:"93%" , sm:'93%' , md:"50%" } , marginX:"auto" , mb:"100px"}}>
    <div className='gpt3__input-teachings'>
    <form className="form" onSubmit={handleSubmit} >
       
       <input
         placeholder="Topic..."
         required
         value={topic}
         onChange={(e) => setTopic(e.target.value)}
       />


       <input
         placeholder="Bible Verse..."
         required
   value={verse}
         onChange={(e) => setVerse(e.target.value)}
       />

       <input
         placeholder="Bible Verse2..."
         required
         value={verse2}
         onChange={(e) => setVerse2(e.target.value)}
       />
       <input
         placeholder="Reference Verse..."
         required
        value={reference}
         onChange={(e) => setReference(e.target.value)}
       />

       <textarea
         placeholder="Full Explanation..."
         required
         value={explanation}
         onChange={(e) => setExplanation(e.target.value)}
       ></textarea>

       <textarea
         placeholder="Conclusion..."
         required
         value={conclusion}
         onChange={(e) => setConclusion(e.target.value)}
       ></textarea>

       <button type="submit">
         {spin ? <CircularProgress /> : "Upload"}
       </button>
     </form>
    </div>
   
    </Box>
    
    </TabPanel>
  </Tabs>
        </Box>         
    </Box>
  )
}

export default Saved