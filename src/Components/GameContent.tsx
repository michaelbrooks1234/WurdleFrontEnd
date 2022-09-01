import React from 'react'
import Keyboard from './GameContentParts/Keyboard'
import Game from './GameContentParts/Game'

function GameContent(props:any){
    return(
        <div className="GameContent">
            <Game setCount={props.setCount} count={props.count}/>
            <Keyboard/>
        </div>
    )
}

export default GameContent;