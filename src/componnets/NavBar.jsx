import React from 'react'
import { useNavigate } from 'react-router-dom';

import {Navbar,Container} from 'react-bootstrap'


function NavBar() {


const navigate= useNavigate()

const handleClick=()=>{
navigate('/login')
}
  return (
    <div>
<Navbar className='navbar' expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-MOVIE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <div className='buttons'>
        <button
            type='button'
            className='btn btn-outline-dark mx-2'
           onClick={handleClick}
        >
            Login
        </button>
        <button
            type='button'
            className='btn btn-outline-dark mx-2'
           onClick={()=>navigate('/register')}
        >
            Register
        </button>
    </div>
  </Container>
</Navbar>


    </div>
  )
}
export default NavBar;