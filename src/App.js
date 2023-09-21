import React, { useState, useEffect } from "react";
import "./App.css";

const options = [
  { id: 0, name: "Piedra", emoji: "🪨" },
  { id: 1, name: "Papel", emoji: "📄" },
  { id: 2, name: "Tijeras", emoji: "✂️" },
];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice.name) {
    return "Empate";
  }

  if (
    (userChoice === "Piedra" && computerChoice.name === "Tijeras") ||
    (userChoice === "Papel" && computerChoice.name === "Piedra") ||
    (userChoice === "Tijeras" && computerChoice.name === "Papel")
  ) {
    return "Ganaste";
  }

  return "Perdiste";
};

function App() {
  const [playerName, setPlayerName] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(1);
  const maxRounds = 5;

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`¡Hola, ${playerName}!`);
  };

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (choice) => {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    const gameResult = getResult(choice, computerChoice);

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(gameResult);

    if (gameResult === "Ganaste") {
      setPlayerScore(playerScore + 1);
    } else if (gameResult === "Perdiste") {
      setComputerScore(computerScore + 1);
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setRound(round + 1);
  };

  useEffect(() => {
    if (round > maxRounds) {
      alert("¡Juego terminado! Puntajes finales:");
      alert(`${playerName}: ${playerScore}`);
      alert(`Computadora: ${computerScore}`);
      if (playerScore > computerScore) {
        alert(`¡${playerName} es el ganador!`);
      } else if (computerScore > playerScore) {
        alert("La Computadora es el ganador.");
      } else {
        alert("El juego terminó en empate.");
      }
    }
  }, [round, playerName, playerScore, computerScore]);

  return (
    <div className="container">
      <h1 className="header">Juego de Piedra, Papel y Tijeras</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ingresa tu nombre:
          <input
            type="text"
            value={playerName}
            onChange={handleNameChange}
          />
        </label>
        <button type="submit" className="button">
          Comenzar
        </button>
      </form>

      <div className="button-container">
        {options.map((choice) => (
          <button
            key={choice.id}
            onClick={() => handleChoice(choice.name)}
            disabled={playerChoice !== null || round > maxRounds}
            className="button"
          >
            {choice.name}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className="result-container">
          <p>Tu elección: {playerChoice}</p>
          <p>Elección de la computadora: {computerChoice.name}</p>
          <p>Resultado: {result}</p>
          {round <= maxRounds && (
            <button onClick={resetGame} className="button">
              Siguiente ronda
            </button>
          )}
        </div>
      )}
      <div className="score-container">
        <p>Marcador:</p>
        <p>{playerName}: {playerScore}</p>
        <p>Computadora: {computerScore}</p>
      </div>
      <div className="images-container">
        <img src="/piedra.jpg" alt="Piedra" />
        <img src="/papel.jpg" alt="Papel" />
        <img src="/tijeras.jpg" alt="Tijeras" />
      </div>
    </div>
  );
}

export default App;

