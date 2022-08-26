import React from 'react'

function OptionsMenu(props: any) {
    return (
        <div className="Blur" id={props.visibility}>
            <div className="OptionsMenu">
                <div className="Ex" onClick={() => {props.changeVisibility()}}>
                    <div className="Ex1"/>
                    <div className="Ex2"/>
                </div>
                <div className="OptionsDivider">
                    <span className="OptionsText">Number of letters in Wurdle</span>
                    <div className="LetterContainer">
                        <span className="LetterInput">0</span>
                        <div className="ButtonContainer">
                            <button className="ButtonUp"></button>
                            <button className="ButtonDown"></button>
                        </div>
                    </div>
                </div>
                <div className="OptionsDivider">
                    <span className="OptionsText">Dark Theme</span><input className="Checkbox" type={"checkbox"}></input>
                </div>
                <div className="OptionsDivider">
                        <span className="OptionsText">Hard Mode</span><input className="Checkbox" type={"checkbox"}></input>
                </div>
            </div>
        </div>
    )
}

export default OptionsMenu;