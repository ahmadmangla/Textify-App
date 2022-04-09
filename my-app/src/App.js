import React from 'react'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

const App = () => {
  return <>
  <Navbar title="Textify"/>
  <div className='container'>
  <TextForm heading="Enter The Text Below"/>
  </div>
  </>
}

export default App