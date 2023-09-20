import React, { useState } from "react";
import './App.css'; // Asegúrate de tener un archivo App.css en la misma carpeta

const options = ["Piedra", "Papel", "Tijeras"];

const getResult = (userChoice, computerChoice) => {
  // Implementa tu lógica para determinar el resultado del juego aquí
  // Devuelve "Empate", "Ganaste" o "Perdiste"
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
    <><div className="App">
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
  );
}

export default App;
