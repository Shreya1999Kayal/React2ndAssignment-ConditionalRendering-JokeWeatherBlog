import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function MainContent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainContent