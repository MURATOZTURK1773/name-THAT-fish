import { Component } from "react";
import "./styles/score-board.css";

interface Props {
  incorrectCount: number;
  correctCount: number;
  handleAnswer: (answer: string) => void;
  answersLeft: string[];
}

export class ClassScoreBoard extends Component<Props> {
  render() {
    const { incorrectCount, correctCount, answersLeft } = this.props;

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
}
