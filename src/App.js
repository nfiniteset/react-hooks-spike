import React, { useState, useRef } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Select from './components/Select';

function Field({ children }) {
  return <div style={{paddingBottom: "24px", display: "flex", width: "200px"}}>{children}</div>
}

function App() {
  const [count, setCount] = useState(1);
  const header = useRef(null);

  return (
    <div>
      <div className="App">
        <header ref={header} className="App-header">
          <p>Component interactions with hooks</p>
        </header>
        <div className="App-body">
          <p>The count is {count}</p>
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
          <Field>
            <Select
              placeholder="Select a count"
              value={count}
              onChange={o => {setCount(o.value)}}
              options={[
                { value: 1, label: "One" },
                { value: 2, label: "Two" },
                { value: 3, label: "Three" },
                { value: 4, label: "Four" },
                { value: 5, label: "Five" },
              ]}
            />
          </Field>
        </div>
      </div>
    </div>
  );
}

export default App;
