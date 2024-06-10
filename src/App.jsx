import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nac from './componemt/Nac'
import Footer from './componemt/Footer'
import Resgistation from './componemt/Resgistation'
import Card from './componemt/Card'
import Mcard from './componemt/Mcard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Nac></Nac>
  <Mcard></Mcard>
  <Card></Card>
  <Resgistation></Resgistation>
  <Footer></Footer>
    </>
  )
}

export default App
