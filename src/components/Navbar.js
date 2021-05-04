import React from 'react'
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <NavLink>
            <h2>Navbar</h2>
            </NavLink>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/Recipes" activeStyle>
                    Recipes
                </NavLink>
            </NavMenu>
        </Nav>
    )
}

export default Navbar
