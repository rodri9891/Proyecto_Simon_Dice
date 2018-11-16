import store from '../store';

export const cambiarColor = (color) =>{

    store.update(co=>{
        co.juego.colorActivo = color;
    })
}