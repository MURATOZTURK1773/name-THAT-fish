import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "./Constants";

export function FunctionalApp() {
  const [correctCount, setCorrect] = useState(0);
  const [incorrectCount, setInCorrect] = useState(0);

  const fishIndex = correctCount + incorrectCount;
  const totalCount = fishIndex;

  const answersLeft = initialFishes.slice(fishIndex).map((fish) => fish.name);

  const handleAnswer = (answer: string) => {
    if (initialFishes[fishIndex].name === answer) {
      setCorrect(correctCount + 1);
    } else {
      setInCorrect(incorrectCount + 1);
    }
    if (answersLeft.length === 0) {
      return (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={totalCount}
        />
      );
    }
  };

  return (
    <>
      <FunctionalScoreBoard
        handleAnswer={handleAnswer}
        incorrectCount={incorrectCount}
        correctCount={correctCount}
        answersLeft={answersLeft}
      />
      {answersLeft.length > 0 && (
        <FunctionalGameBoard
          fishIndex={fishIndex}
          handleAnswer={handleAnswer}
          answersLeft={answersLeft}
        />
      )}
      {answersLeft.length === 0 && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={totalCount}
        />
      )}
    </>
  );
}
