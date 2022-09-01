import React from 'react'
import LetterSpace from './LetterSpace'

function Game(props:any){

    let arr: any = [];

    for(let i = 0; i < props.count; i++){
        if(i != 0){
            arr.push([]);
        }
        for(let j = 0; i < props.count; j++){
           arr[i].push(<LetterSpace row={i} column={j}/>);
        }
    }

    
    return(
        <div></div>
    )
}

export default Game;