import React, {useEffect} from 'react';

import './App.css';

function App() {
  useEffect(()=>{
    getTodos();
  }, [])
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
