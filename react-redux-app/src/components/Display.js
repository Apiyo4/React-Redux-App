import React from 'react';
import {connect} from 'react-redux';

function Display({char}){
    
    return(
        <div>
            <img src={char.image } alt={char.name}/>
            <h2>{char.name}</h2>

        </div>
    )
}
export default Display;