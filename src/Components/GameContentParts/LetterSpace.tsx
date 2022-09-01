import React from 'react';

function LetterSpace(props:any) {
    return (
        <div id={props.row + "," + props.collumn}></div>
    )
} 

export default LetterSpace;