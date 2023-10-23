import React, { useState } from "react";
import "./styles/game-board.css";
import { initialFishes } from "./Constants";

interface Props {
  handleAnswer: (answer: string) => void;
  answersLeft: string[];
  fishIndex: number;
}

export function FunctionalGameBoard({
  handleAnswer,
  answersLeft,
  fishIndex,
}: Props) {
  const [userGuess, setUserGuess] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAnswer(userGuess);
  };

  const nextFishToName = answersLeft[fishIndex];

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={initialFishes[fishIndex].url} alt={nextFishToName} />
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
