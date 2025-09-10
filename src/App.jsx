import { useState } from 'react'
import { ThemeProvider } from './context/ThemeProvider'
import './App.css'
import Root from './Pages/Root'


function App() {

  return (

    <ThemeProvider>
      <Root />
    </ThemeProvider>

  )
}

export default App
