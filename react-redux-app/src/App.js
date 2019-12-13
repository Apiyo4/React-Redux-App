import React, {useEffect} from 'react';

import './App.css';
import {getTodos} from './state/actionCreators';
import {connect} from 'react-redux';
import Display from './components/Display';

export function App({data, getTodos}) {
  console.log(data)
  
  useEffect(()=>{
    getTodos();
  }, [])

  if(!data || data.length===0){ 
  return <h1>Loading</h1>
}
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <div className='flexDiv'>
        {data.map(char=>{
          return  <Display  char = {char} key={char.id} />
        })}
        
      </div>
    </div>
  );
 
}
function mapStateToProps(state){
  return{
    data: state.reducer,
  }
}

export default connect(mapStateToProps, {getTodos})(App);
