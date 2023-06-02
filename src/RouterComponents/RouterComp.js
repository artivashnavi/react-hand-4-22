import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import '../App.css'

function RouterComp() {
  return (
    <>
      <BrowserRouter>
      <div className='parent'>
      <Link to='/' id='child' >Home</Link>
      <Link to='/student' id='child'>Student</Link>
      <Link to='/contact' id='child'>Contact</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student' element={<Student />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterComp
