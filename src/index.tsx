import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
// Style
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
