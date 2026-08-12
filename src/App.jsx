import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <ServicesPage/>
    </div>
  )
}

export default App