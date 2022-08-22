import React from 'react'
import Burger from './NavBarParts/Burger'
import Options from './NavBarParts/Options'

function NavBar(props: any) {
    return (
        <div className="NavBar">
            <Burger/>
            <h1 className="NavBarTitle">Wurdle</h1>
            <Options Gear={props.Gear} Bar={props.Bar} QuestionMark={props.QuestionMark}/> 
        </div>
    )
}

export default NavBar;