import React from 'react'




function Options(props: any) {
    return (
        <div className="Options">
            <div className="OptionsImageHolder">
                {props.Bar}
            </div>
            <div className="OptionsImageHolder">
                {props.QuestionMark}
            </div>
            <div className="OptionsImageHolder" onClick={props.changeVisibility}>
                {props.Gear}
            </div>
        </div>
    )
}

export default Options;