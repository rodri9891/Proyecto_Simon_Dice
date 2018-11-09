import store from '../store';

export const cambiarAlias = (alias) =>{

    store.update(c=>{
        c.usuario.alias = alias;
    })
}