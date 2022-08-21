import React from 'react'
import Burger from './NavBarParts/Burger'
import Options from './NavBarParts/Options'

function NavBar() {
    return (
        <div className="NavBar">
            <Burger/>
            <h1 className="NavBarTitle">Wurdle</h1>
            <Options/> 
        </div>
    )
}

export default NavBar;