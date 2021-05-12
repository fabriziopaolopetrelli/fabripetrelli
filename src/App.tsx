import React from 'react'
import './App.css'

import GreetingModal from './components/Modal'

const App: React.FC = () => {
  const greetings = 'Welcome'
  return (
    <div className="bgcolor">
      <div>{greetings}</div>
      <GreetingModal />
    </div>
  )
}
export default App
