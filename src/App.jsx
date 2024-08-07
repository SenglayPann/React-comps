import { useState } from 'react'
import Button from './components/Button'
import './style/output.css'
function App() {

  return (
    <div>
      <Button primary outline >Register</Button>
      <Button secondary outline rounded >Register</Button>
      <Button success rounded >Register</Button>
      <Button warning outline rounded>Register</Button>
    </div>
  )
}

export default App
