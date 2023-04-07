import Carder from '../Components/Card/Carder'
import Center from '../Components/Center/Center'
import FirstFruit from '../Components/FirstFruit/FirstFruit'
import Header from '../Components/Header/Header'
import Mapp from '../Components/Mapp/Mapp'
import Salvation from '../Components/Salvation/Salvation'
import Footer from '../Components/footer/Footer'

import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Header/>
        <FirstFruit/>
        <Carder/>
        <Salvation/>
        <Center/>
        <Mapp/>
        <Footer/>
    </div>
  )
}

export default Home