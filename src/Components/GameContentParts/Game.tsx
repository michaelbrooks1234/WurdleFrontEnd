import React from 'react';
import LetterWrapper from './LetterWrapper';

function Game(props:any){

    let elements = "";

    for(let i = 0; i < 6; i++){
        let innerElements = "";
        for(let j = 0; i < props.count; j++){
           innerElements += "<LetterSpace row={" + i + "} collumn={" + j + "}/>"; 
        }
        elements+=innerElements;
    }

    let total = <LetterWrapper elements={elements}/>;
    
    return(
        <div>{total}</div>
    )
}

export default Game;