import React, {useEffect} from 'react';

import './App.css';
import {getTodos} from './state/actionCreators';
import {connect} from 'react-redux';

export function App({getTodos}) {
  useEffect(()=>{
    getTodos();
  }, [])
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default connect(state=>state, {getTodos})(App);
