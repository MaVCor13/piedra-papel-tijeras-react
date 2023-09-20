import React, { useState } from "react";
import "./App.css";

const options = [
  { id: 0, name: "Piedra", emoji: "🪨" },
  { id: 1, name: "Papel", emoji: "📄" },
  { id: 2, name: "Tijeras", emoji: "✂️" },
];

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
    <div className="container">
      <h1 className="header">Juego de Piedra, Papel y Tijeras</h1>
      <div className="button-container">
        {options.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handleChoice(choice.name)}
            disabled={playerChoice !== null}
            className="button"
          >
            {choice.name}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className="result-container">
          <p>Tu elección: {playerChoice}</p>
          <p>Elección de la computadora: {computerChoice}</p>
          <p>Resultado: {result}</p>
          <button onClick={resetGame} className="button">
            Reiniciar
          </button>
        </div>
      )}
      <div className="images-container">
        <img src="/piedra.jpg" alt="Piedra" />
        <img src="/papel.jpg" alt="Papel" />
        <img src="/tijeras.jpg" alt="Tijeras" />
      </div>
    </div>
  );
}

export default App;




