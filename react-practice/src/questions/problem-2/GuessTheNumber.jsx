import React, { useEffect, useState } from 'react';
import './GuessTheNumber.css'

function GuessTheNumber() {

  const [number, setNumber] = useState(0);
  const [random, setRandom] = useState(0);
  const [text, setText] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [isdisable, setIsDisable] = useState(false);

  useEffect(() => {
    const randomNumber = (Math.random().toFixed(2)) * 100
    setRandom(randomNumber)
  }, [])

  // Function to handle guess checking
  const handleGuess = () => {
    if (number < random) {
      setText('too low')
    } else if (number > random) {
      setText('too high')
    } else if (number == random) {
      setText('right')
      setIsDisable(true)

    }
    setAttempt(prev => prev + 1)
  };

  // Function to reset the game
  const resetGame = () => {
    setAttempt(0)
    setNumber(0)
    setText('')
    setIsDisable(false)
  };

  const handleChange = (e) => {
    setNumber(e.target.value)
  }

  return (
    <div className='container'>
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        type="number"
        value={number}
        onChange={handleChange}
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
      />
      <div className="buttons">
        <button disabled={isdisable} onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <h2>{text == 'right' ? `${text} ${attempt} Attempts` : text}</h2>
    </div>
  );
}

export default GuessTheNumber;
