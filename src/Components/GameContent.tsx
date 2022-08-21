import React from 'react'
import Keyboard from './GameContentParts/Keyboard'
import Game from './GameContentParts/Game'

function GameContent(){
    return(
        <div className="GameContent">
            <Game/>
            <Keyboard/>
        </div>
    )
}

export default GameContent;