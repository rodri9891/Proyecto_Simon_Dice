import React from 'react';
import store from '../store';

//2 array - maquina y jugador

//
numeroRandom(){
    
}

numeroJugador(){
    
}

export default class IniciarJuego extends React.Component{

    render(){

        const {BTN} = store.getState();

        return(
            <button>INICIAR</button>

        );
    }
}