import React, { useState } from "react";
import "./styles/game-board.css";
import { initialFishes } from "./FunctionalApp";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
// import { FunctionalScoreBoard } from "./FunctionalScoreBoard";

interface Props {
  handleAnswer: (answer: string) => void;
}

export function FunctionalGameBoard({ handleAnswer }: Props) {
  const [userGuess, setUserGuess] = useState("");
  const [currentFishIndex, setCurrentFishIndex] = useState(0);
  const [answersLeft, setAnswerLeft] = useState(
    initialFishes.map((fish) => fish.name)
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = answersLeft.includes(userGuess);
    if (isValid) {
      setAnswerLeft((prevAnswer) =>
        prevAnswer.filter((fish) => fish !== userGuess)
      );
      setCurrentFishIndex((prevIndex) => prevIndex + 1);
    }

    handleAnswer(userGuess);
  };

  const nextFishToName = answersLeft[currentFishIndex];

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={initialFishes[currentFishIndex].url} alt={nextFishToName} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userGuess}
          onChange={(event) => setUserGuess(event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
