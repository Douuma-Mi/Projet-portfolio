import React from 'react'
import './App.css'
import Cards from './components/Cards'
import Img from './components/Img'
import Links from './components/Links'
import Navbar from './components/Navbar'
import Text from './components/Text'
import Skills from './components/Skills'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
function App() {
  return (
     <>
    <Navbar/>
   <Img/>
   <Text/>
  <Links/>
   <Cards/>
   <Skills/>
    </>
  )
}

export default App
