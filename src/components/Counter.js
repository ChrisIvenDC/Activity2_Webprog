import React,{ useState} from "react";
import "./CounterStyle.css";
import Navigation  from './Navigation';

function Counter() {
  var [count, setCount] = useState(0);

  return(
    <div>
      <Navigation></Navigation>
      <div class="Main">

        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count - 1)} class="Buttoncount">Subtract 1</button>
        <button onClick={() => setCount(count = 0)} class="Buttoncount">Reset</button>
        <button onClick={() => setCount(count + 1)} class="Buttoncount">Add 1</button>
      </div>
    </div>
  );
}

export default Counter;
