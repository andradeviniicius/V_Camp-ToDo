import { useState } from 'react'
import logo from './logo.svg'
import { Header } from './components/mainComponents/Header'
import { Main } from './components/mainComponents/Main'

function App() {
  return (
    <div className='body'>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
