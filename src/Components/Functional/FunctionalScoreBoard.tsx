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
  answersLeft,
}: Props) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
