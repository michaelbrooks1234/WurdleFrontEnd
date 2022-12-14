import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import GameContent from './Components/GameContent'
import OptionsMenu from './Components/OptionsMenu'
import { ReactComponent as Gear } from './gear.svg'
import { ReactComponent as Bar } from './bar.svg'
import { ReactComponent as QuestionMark } from './questionmark.svg'
import arrow from "./arrow.png"

function App() {

  const [visibility, setVisibility] = React.useState("Visible");
  const [count, setCount] = React.useState(6);

  function changeVisibility(): void {
    if(visibility === "Hidden"){
      setVisibility("");
    }else {
      setVisibility("Hidden");
    }
  }
  
  return(
    <div className="App">
      <OptionsMenu visibility={visibility} arrow={arrow} changeVisibility={changeVisibility}/>
      <NavBar changeVisibility={changeVisibility} Gear={<Gear className="OptionsImage"/>} Bar={<Bar className="OptionsImage"/>} QuestionMark={<QuestionMark className="OptionsImage"/>}/>
      <GameContent setCount={setCount} count={count}/>
    </div>
  )
}

export default App;
