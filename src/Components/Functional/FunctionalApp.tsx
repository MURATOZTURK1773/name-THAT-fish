import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "./Constants";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setInCorrectCount] = useState(0);

  const fishIndex = correctCount + incorrectCount;
  const totalCount = initialFishes.length;
  const answersLeft = initialFishes.slice(fishIndex).map((fish) => fish.name);
  const isGameOver = fishIndex === totalCount;

  const handleAnswer = (answer: string) => {
    if (initialFishes[fishIndex].name === answer) {
      setCorrectCount(correctCount + 1);
    } else {
      setInCorrectCount(incorrectCount + 1);
    }
  };

  return (
    <>
      {!isGameOver && (
        <>
          <FunctionalScoreBoard
            incorrectCount={incorrectCount}
            correctCount={correctCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            handleAnswer={handleAnswer}
            fishData={initialFishes[fishIndex]}
          />
        </>
      )}
      {isGameOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={totalCount}
        />
      )}
    </>
  );
}
