import  { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className={"App"}>

      <button onClick={toggle}>
      Click Me
      </button>

      {show && <h1>Hello!!</h1> }
    </div>
  );
}

export default App;
