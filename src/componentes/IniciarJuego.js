import React from 'react';
import store from '../store';


export default class IniciarJuego extends React.Component{

    render(){

        const {BTN} = store.getState();

        return(
            <button>INICIAR</button>

        );
    }
}