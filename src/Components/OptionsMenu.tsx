import React from 'react'

function OptionsMenu(props: any) {
    return (
        <div className="Blur" id={props.OptionsMenuVisibility}>
            <div className="OptionsMenu">
                <div className="Ex">
                    <div className="Ex1"/>
                    <div className="Ex2"/>
                </div>
                <div className="OptionsDivider">
                    <span className="OptionsText">Number of letters in Wurdle:</span>
                </div>
                <div className="OptionsDivider">
                    <span className="OptionsText">Color Theme (dark/light):</span>
                </div>
                <div className="OptionsDivider">
                    <span className="OptionsText">Hard Mode</span>
                </div>
            </div>
        </div>
    )
}

export default OptionsMenu;