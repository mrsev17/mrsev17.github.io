import { useState } from "react";
import "./App.css";

function App() {
  const [myColor, setColor] = useState("rgb(255, 0, 0)");

  const randomNumOne = () => Math.floor(Math.random() * 100);
  const randomNumTwo = () => Math.floor(Math.random() * 250);
  const randomNumThree = () => Math.floor(Math.random() * 250);

  const changeColor = () =>
    setColor(`rgb(${randomNumOne()}, ${randomNumTwo()}, ${randomNumThree()})`);

  const myStyle = {
    backgroundColor: myColor,
  };
  return (
    <div className="App">
      <button onClick={changeColor}>Change color</button>
      <div style={myStyle} className="card"></div>
    </div>
  );
}

export default App;
