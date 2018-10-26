import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          Clicked {count} times.
          <Button onClick={() => {setCount(count + 1)}}>Increment</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
