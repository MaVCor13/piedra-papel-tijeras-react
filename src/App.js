import React, { useState } from "react";
import './App.css'; 
const options = ["Piedra", "Papel", "Tijeras"];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Empate";
  }

  if (
    (userChoice === "Piedra" && computerChoice === "Tijeras") ||
    (userChoice === "Papel" && computerChoice === "Piedra") ||
    (userChoice === "Tijeras" && computerChoice === "Papel")
  ) {
    return "Ganaste";
  }

  return "Perdiste";
};


function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (choice) => {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    const gameResult = getResult(choice, computerChoice);

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(gameResult);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="App">
      <h1>Juego de Piedra, Papel y Tijeras</h1>
      <div>
        {options.map((choice) => (
          <button key={choice} onClick={() => handleChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div>
          <p>Tu elección: {playerChoice}</p>
          <p>Elección de la computadora: {computerChoice}</p>
          <p>Resultado: {result}</p>
          <button onClick={resetGame}>Reiniciar</button>
        </div>
      )}
      <div>
        <img src="/img/piedra.png" alt="Piedra" />
        <img src="/img/papel.png" alt="Papel" />
        <img src="/img/tijeras.png" alt="Tijeras" />
      </div>
    </div>
  );
}

export default App;
