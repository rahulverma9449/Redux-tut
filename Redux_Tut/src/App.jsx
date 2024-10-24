import './App.css'
import User from './Components/User'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <User data={{name:'rahulverma', age: 27}} />
    </div>
  )
}

export default App
