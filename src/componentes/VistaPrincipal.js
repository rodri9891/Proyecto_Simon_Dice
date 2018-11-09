import React from 'react';
import store from '../store';

export default class VistaPrincipal extends React.Component{


    render(){
        const {alias} = store.getState().usuario;
        return(
            <div>
            <h1>Bienvenido al juego "SIMÓN DICE"</h1>
            <p1>El juego consiste en seguir la secuencia de colores</p1>
            <p>Alias: {alias}</p>
            </div>
        );

    }
}