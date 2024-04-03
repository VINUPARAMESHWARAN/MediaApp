import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
       <Navbar className="bg-info">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{color:'white',textDecoration:'none'}}>
            <i class="fa-solid fa-photo-film"></i>
                      Media Player
            </Link>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
  )
}

export default Header