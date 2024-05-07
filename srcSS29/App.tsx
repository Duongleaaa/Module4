import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import H1 from './components/H1'
import H2 from './components/H2'
import H3 from './components/H3'
import H4 from './components/H4'
import H5 from './components/H5+6'
import H7 from './components/H7'
import H8 from './components/H8'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <H1></H1>
      <hr />
      <H2></H2>
      <hr />
      <H3></H3>
      <H4></H4>
      <hr />
      <H5></H5>
      <hr />
      <H7></H7>
      <hr />
      <H8></H8>
    </>
  )
}

export default App
