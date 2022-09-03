import React from 'react';
import LetterWrapper from './LetterWrapper';

function Game(props:any){

    let elements = "";


    let total = <LetterWrapper elements={elements}/>;
    
    return(
        <div>{total}</div>
    )
}

export default Game;