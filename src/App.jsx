import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Navbar/Nav'
import PriceList from './Component/PriceList/PriceList'
import Dashboard from './Component/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Nav></Nav>
      <h1 className='text-7xl text-purple-900 '>Hello from Qater</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      
    </div>
  )
}

export default App
