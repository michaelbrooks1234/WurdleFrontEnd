import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import GameContent from "./Components/GameContent"

function App() {
  return(
    <div className="App">
      <NavBar/>
      <GameContent/>
    </div>
  )
}

export default App;
