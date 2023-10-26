import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "./Constants";

interface State {
  incorrectCount: number;
  correctCount: number;
}

export class ClassApp extends Component<State> {
  state: State = {
    incorrectCount: 0,
    correctCount: 0,
  };

  handleAnswer = (answer: string) => {
    if (
      initialFishes[this.state.correctCount + this.state.incorrectCount]
        .name === answer
    ) {
      this.setState({
        correctCount: this.state.correctCount + 1,
      });
    } else {
      this.setState({
        incorrectCount: this.state.incorrectCount + 1,
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
              incorrectCount={this.state.incorrectCount}
              correctCount={this.state.correctCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              fishIndex={fishIndex}
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
