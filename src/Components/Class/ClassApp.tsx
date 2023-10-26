import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "./Constants";

interface State {
  incorrectCount: number;
  correctCount: number;
  fishIndex: number;
  answersLeft: string[];
}

export class ClassApp extends Component<State> {
  state: State = {
    incorrectCount: 0,
    correctCount: 0,
    fishIndex: 0,
    answersLeft: initialFishes.map((fish) => fish.name),
  };

  handleAnswer = (answer: string) => {
    if (initialFishes[this.state.fishIndex].name === answer) {
      this.setState({
        correctCount: this.state.correctCount + 1,
        fishIndex: this.state.fishIndex + 1,
        answersLeft: this.state.answersLeft.filter((name) => name !== answer),
      });
    } else {
      this.setState({
        incorrectCount: this.state.incorrectCount + 1,
        fishIndex: this.state.fishIndex + 1,
      });
    }
  };

  render() {
    const fishIndex = this.state.correctCount + this.state.incorrectCount;
    const totalCount = initialFishes.length;
    const answersLeft = initialFishes.slice(fishIndex).map((fish) => fish.name);
    const isGameOver = fishIndex === totalCount;

    return (
      <>
        {!isGameOver && (
          <>
            <ClassScoreBoard
              handleAnswer={this.handleAnswer}
              incorrectCount={this.state.incorrectCount}
              correctCount={this.state.correctCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              fishIndex={this.state.fishIndex}
              handleAnswer={this.handleAnswer}
            />
          </>
        )}
        {isGameOver && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            totalCount={fishIndex}
          />
        )}
      </>
    );
  }
}
