import React, { useState } from "react";
import "./styles/game-board.css";
import { TFish } from "../../types";

interface Props {
  handleAnswer: (answer: string) => void;
  fishData: TFish;
}

export function FunctionalGameBoard({ handleAnswer, fishData }: Props) {
  const [userGuess, setUserGuess] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAnswer(userGuess);
    setUserGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
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
