import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles= styled.div`
    .navbar{
        backgroud-color: #222;
    }

    .navbar-brand, .navbar-nav, .nav-link{
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`

const NavBar= ()=>(
    
    <Styles>
        <Navbar expand="lg">
            <Navbar.Toggle aria-label="basic-navbar-nav" />
            <Navbar.Brand href="/">Competative Adda</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <NavLink className="nav-link" to="/">Dashboard</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/practice">Practice</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
    
)





// const Navbar= ()=> (
//     <div className="navbar">
//         <ul>
//             <li>
//                 <NavLink to="/">Dashboard</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/practice">Practice</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/login">Login</NavLink>
//             </li>
//         </ul>
//     </div>
// )

export default NavBar