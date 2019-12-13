import axios from 'axios';
import {SET_TODO} from './actionTypes'

export const getTodos = ()=> (dispatch)=>{
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res=>{
        
        const result = res.data.results;
        dispatch({
            type: SET_TODO,
            payload: result,
        })
       
    })
    .catch(er=>{
        console.log(er);
        
    })
}