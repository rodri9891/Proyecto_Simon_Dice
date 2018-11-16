import React from 'react';
import store from '../store';
import { cambiarColor } from '../acciones/clickcolor';

export default class SimonDice extends React.Component{

    tomarColor(color){
        var { juego } = store.getState();
        const colorActivoClase = juego.colorActivo === color ? 'activo' : '';
        return `${color} ${colorActivoClase}`;
    }

    render (){
        const {canv1, canv2, canv3, canv4} = store.getState();

        return(
            <div>
                <canvas onClick={() => cambiarColor('rojo')} class={this.tomarColor('rojo')} id="rojo" width="250" height="250" ></canvas>
                <canvas  onClick={() => cambiarColor('blanco')} class={this.tomarColor('blanco')} id="blanco" width="250" height="250"></canvas>
                <br></br>
                <canvas  onClick={() => cambiarColor('azul')} class={this.tomarColor('azul')} id="azul" width="250" height="250" ></canvas>
                <canvas  onClick={() => cambiarColor('verde')} class={this.tomarColor('verde')} id="verde" width="250" height="250" ></canvas>
            </div>
        );
    } 
}
