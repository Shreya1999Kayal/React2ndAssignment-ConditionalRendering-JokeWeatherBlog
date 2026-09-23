// src/App.tsx (unchanged)

import React from 'react'
import './App.css'
import Routes from './routes/Routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={Routes} />
    </React.Fragment>
  )
}

export default App