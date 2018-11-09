import React, { Component } from 'react';
import VistaPrincipal from './componentes/VistaPrincipal';
import IngresarAlias from './componentes/IngresarAlias';
import './App.css';
import IniciarJuego from './componentes/IniciarJuego';
import SimonDice from './componentes/SimonDice';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <header className="App-header">
      <div className="App">
         <VistaPrincipal></VistaPrincipal>
         <IngresarAlias></IngresarAlias>
         <IniciarJuego></IniciarJuego>
         <div>
           <br></br>
           <SimonDice></SimonDice>
         </div>
      </div>
      </header>
    );
  }
}

export default App;
