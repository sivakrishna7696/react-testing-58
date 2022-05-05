import logo from './logo.svg';
import './App.css';
import {useState, useSyncExternalStore} from 'react';

function App(props) {
  const [counter,setCounter] = useState(0);

  return (
    <div className="App">
      <h2>Hello World!</h2>
      <p>This is para testing</p>
      <div id="testid">welcome {props.coursename}</div>
      <div id="initial_value">{counter}</div>
      <button onClick={()=> setCounter(counter+1)}>increment</button>

    </div>
  );
}

export default App;
