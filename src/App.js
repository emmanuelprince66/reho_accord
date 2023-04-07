import './App.css';
import  { ThemeProvider , createTheme } from '@mui/material'
import { BrowserRouter} from 'react-router-dom';
import Routess from './Containers/Routess';
import NavBar from './Components/nav/NavBar';
import { AuthProvider } from './Components/auth';


const theme = createTheme({
  MenuItem:{
  fontFamily:'Montserrat, sans-serif'
  }
})

function App() {
  return (
    <BrowserRouter>
     <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
        <AuthProvider>
          <Routess/>
        </AuthProvider>
    </div>
    </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App;