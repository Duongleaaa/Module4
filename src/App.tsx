import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import WorkList from './components/WorkList'
import CompleteWork from './components/CompleteWork'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
      }}>
        <div style={{
          backgroundColor:'#f5f5f5',
          padding:'30px',
          display:'flex',
          flexDirection:'column',
          gap:'20px',
          width:'400px'
        }}>
            <h2 style={{textAlign:'center'}}>Todo List</h2>
            <div><Input></Input></div>
            <div><WorkList></WorkList></div>
            <div><CompleteWork></CompleteWork></div>
        </div>
      </div>
    </>
  )
}

export default App
