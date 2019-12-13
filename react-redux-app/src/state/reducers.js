import {SET_TODO} from './actionTypes';

const initialState = []
export function reducer(state = initialState, action){
    switch(action.type){
        case SET_TODO:
            return action.payload;
        default:
            return state;
    }
}