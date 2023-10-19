import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [correctCount, setCorrect] = useState(0);
  const [incorrectCount, setInCorrect] = useState(0);

  // does not need to be a piece of state
  const [answersLeft, setAnswersLeft] = useState([
    "trout",
    "salmon",
    "tuna",
    "shark",
  ]);

  // does not need to be a piece of state
  const [totalCount, setTotalCount] = useState(0);

  const fishIndex = correctCount + incorrectCount;

  const handleAnswer = (answer: string) => {
    if (initialFishes[fishIndex].name === answer) {
      setCorrect(correctCount + 1);
    } else {
      setInCorrect(incorrectCount + 1);
    }
    setAnswersLeft((prevAnswers) =>
      prevAnswers.filter((fish) => fish !== answer)
    );
    setTotalCount(fishIndex + 1);
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
      <FunctionalGameBoard handleAnswer={handleAnswer} />
      {answersLeft.length === 0 && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={totalCount}
        />
      )}
    </>
  );
}
