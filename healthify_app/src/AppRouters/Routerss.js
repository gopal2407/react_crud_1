import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Add, Delete, Home, Update , Data} from '../Components'

function Routerss() {
  return (
    <Routes>
        <Route path='' element={<Home/>} ></Route>
        <Route path='/add' element={<Add/>} ></Route>
        <Route path='/update/:userId' element={<Update/>} ></Route>
        <Route path='/delete' element={<Delete/>}></Route>
        <Route path='/data' element={<Data/>}></Route>
    </Routes>
  )
}

export default Routerss