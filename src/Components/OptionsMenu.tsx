import React from 'react'

function OptionsMenu(props: any) {
    return (
        <div className="Blur" id={props.OptionsMenuVisibility}>
            <div className="OptionsMenu">
                <span className="OptionsText">Number of letters in wurdle:</span>
                <span className="OptionsText"></span>
                <span className="OptionsText">Settings</span>
                <span className="OptionsText">Settings</span>
            </div>
        </div>
    )
}

export default OptionsMenu;