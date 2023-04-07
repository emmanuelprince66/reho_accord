import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import  PageNotFound from '../Paths/notFound/PageNotFound'
import { RequireAuth } from '../Components/RequireAuth'

import Who from '../Paths/who/Who'
import Saved from '../Paths/saved/Saved'
import Programs from '../Paths/program/Programs'
import What from '../Paths/what/What'
import Units from '../Paths/units/Units'
import Admin from '../Paths/admin/Admin'
import Teachings from '../Paths/teachings/Teachings'


const Routess = () => {
  return (
    <div>
         <Routes>
           <Route  index  path="/"  element={<Home/>} />
           
           <Route path='/teachings' element={<Teachings/>} />
           
           <Route   path='/who' element={ <Who/> } />
           <Route   path='/saved' element={
            <RequireAuth>
            <Saved/> 
            </RequireAuth>   
            } />
           <Route   path='/programs' element={
            <Programs/>} />
           <Route   path='/what' element={ 
            <What/>  } />
           <Route   path='/units' element={
            <Units/> } />
           <Route   path='/admin' element={
            <Admin/> 
            } />
           <Route   path={'/*'} element={<PageNotFound/>} />
        </Routes>
    </div>
  )
}

export default Routess