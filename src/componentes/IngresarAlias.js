import React from 'react';
import store from '../store';
import {cambiarAlias} from '../acciones';

export default class IngresarAlias extends React.Component{

    cambiarAlias(evento){
        const nuevoAlias = evento.target.value;
        cambiarAlias(nuevoAlias);
    }

    render(){
        const{alias} = store.getState().usuario;
        return (
            
                <input onChange={this.cambiarAlias}
                 placeholder="Ingresa tu alias"
                 type="text"
                 name="alias" 
                 value={alias}
                 >
                 </input>
            

        );
    }



}