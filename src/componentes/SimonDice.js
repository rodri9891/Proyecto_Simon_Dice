import React from 'react';
import store from '../store';


export default class SimonDice extends React.Component{

    render (){
        const {canv1, canv2, canv3, canv4} = store.getState();

        return(
            <div>
                <canvas width="250" height="250" class="CNV1"></canvas>
                <canvas width="250" height="250" class="CNV2"></canvas>
                <br></br>
                <canvas width="250" height="250" class="CNV3"></canvas>
                <canvas width="250" height="250" class="CNV4"></canvas>
            </div>
        );
    }
}