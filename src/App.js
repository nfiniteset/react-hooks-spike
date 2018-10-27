import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { MenuItem, MenuContainer } from './components/Menu';
import Input from './components/Input';

function Field({ children }) {
  return <div style={{paddingBottom: "24px", display: "flex", width: "200px"}}>{children}</div>
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Clicked {count} times.</p>
          <Field>
            <Button
              data-foo="bar"
              onClick={() => setCount(count - 1)}
              onMouseEnter={() => console.log("Mouse enter")}
              onMouseLeave={() => console.log("Mouse leave")}
              onMouseDown={() => console.log("Mouse Down")}
              onMouseUp={() => console.log("Mouse Up")}
              onFocus={() => console.log("Focus")}
              onBlur={() => console.log("Blur")}
            >
              Decrement
            </Button>
            <div style={{width: "12px"}} />
            <Button
              data-foo="bar"
              onClick={() => setCount(count + 1)}
              onMouseEnter={() => console.log("Mouse enter")}
              onMouseLeave={() => console.log("Mouse leave")}
              onMouseDown={() => console.log("Mouse Down")}
              onMouseUp={() => console.log("Mouse Up")}
              onFocus={() => console.log("Focus")}
              onBlur={() => console.log("Blur")}
            >
              Increment
            </Button>
          </Field>
          <Field>
            <Input value={count} type="number" onChange={(e) => setCount(Number(e.target.value))} />
          </Field>
          <div style={{ width: "200px" }}>
            <MenuContainer>
              <MenuItem label="One" onClick={() => setCount(1)} />
              <MenuItem label="Two" onClick={() => setCount(2)} />
              <MenuItem label="Three" onClick={() => setCount(3)} />
              <MenuItem label="Four" onClick={() => setCount(4)} />
              <MenuItem label="Five" onClick={() => setCount(5)} />
            </MenuContainer>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
