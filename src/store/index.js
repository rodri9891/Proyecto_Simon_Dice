import createStore from 'pure-store';

const store = createStore({
    usuario:{
        alias: '',
    },
    juego: {
        colorActivo: ''   
    }
});

export default store;