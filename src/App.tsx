import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import GameContent from './Components/GameContent'
import OptionsMenu from './Components/OptionsMenu'
import { ReactComponent as Gear } from './gear.svg'
import { ReactComponent as Bar } from './bar.svg'
import { ReactComponent as QuestionMark } from './questionmark.svg'

function App() {

  return(
    <div className="App">
      <OptionsMenu/>
      <NavBar Gear={<Gear className="OptionsImage"/>} Bar={<Bar className="OptionsImage"/>} QuestionMark={<QuestionMark className="OptionsImage"/>}/>
      <GameContent/>
    </div>
  )
}

export default App;
