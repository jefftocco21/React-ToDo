import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AnotherComponent from './AnotherComponent';

function App() {
  //count, setter for the piece of state, and initial value of 0 using useState 'hook"
  const [count, setCount] = useState(0);

  function decrement() {
    // setCount(count-1);
    setCount(prevCount => prevCount-1)
  }

  function increment(){
    // setCount(count+1);
    setCount(prevCount => prevCount+1)

  }

  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold'
  }

  return (
    <div className="App">
      <header className="App-header">
        <AnotherComponent name="Jeff"/>
        <div>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style = {someStyle}>{3+2} </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
