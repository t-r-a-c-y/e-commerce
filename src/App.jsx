import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Carter from './components/Carter'

function App() {
  const [likes,setLikes]= useState(0)
  return (
    <div className=''>
      <Header likes={likes} />
      <Home />
      <Carter setLiked={setLikes}/>
      <Footer />
    </div>
  )
}

export default App