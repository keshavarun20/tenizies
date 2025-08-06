import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
const App = () => {
  const random = () => Math.floor(Math.random() * 6) + 1;
  const allNewDice = () => Array.from({ length: 10 }, random);
  
  const [dice, setDice] = useState(allNewDice())
  const box = dice.map((dice, index) => <Die key={index} value={dice} onClick={() => setDice(allNewDice())}
 />);

  console.log(allNewDice());
  return (
    <main>
      <h3>Tenizies</h3>
      <div className="boxes">{box}</div>
    </main>
  );
};

export default App;
