import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import './App.css'

import GreetingModal from './components/Modal'

const App: React.FC = () => (
  <div>
    <GreetingModal />
  </div>
)
export default App
