import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
const App = () => {
const random = () => Math.floor(Math.random() * 6) +1;  
//creates a new array from an array-like or iterable object.

// Array-like object: an object that has a length property and indexed elements (like arguments or NodeList).

// Iterable: something you can loop over with for...of (like strings, arrays, sets, etc.).

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
