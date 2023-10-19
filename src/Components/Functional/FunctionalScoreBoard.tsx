import React from "react";
import "./styles/score-board.css";

interface Props {
  incorrectCount: number;
  correctCount: number;
  handleAnswer: (answer: string) => void;
  answersLeft: string[];
}

export function FunctionalScoreBoard({
  incorrectCount,
  correctCount,
  handleAnswer,
  answersLeft,
}: Props) {
  const handleGuess = (userGuess: string) => {
    if (answersLeft.includes(userGuess)) {
      handleAnswer(userGuess);
    }
  };

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div
            key={answer}
            className="choice"
            onClick={() => handleGuess(answer)}
          >
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
