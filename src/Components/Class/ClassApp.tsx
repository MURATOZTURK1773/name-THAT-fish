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

  fishIndex = this.state.correctCount + this.state.incorrectCount;
  totalCount = initialFishes.length;

  answersLeft = initialFishes
    .slice(this.state.fishIndex)
    .map((fish) => fish.name);

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

    return (
      <>
        <>
          <ClassScoreBoard
            handleAnswer={this.handleAnswer}
            incorrectCount={this.state.incorrectCount}
            correctCount={this.state.correctCount}
            answersLeft={this.state.answersLeft}
          />
          {this.answersLeft.length > 0 && (
            <ClassGameBoard
              correctCount={this.state.correctCount}
              totalCount={this.totalCount}
              userGuess=""
              answersLeft={this.answersLeft}
              fishIndex={this.state.fishIndex}
              handleAnswer={this.handleAnswer}
            />
          )}
        </>
        {this.answersLeft.length === 0 && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            totalCount={fishIndex}
          />
        )}
      </>
    );
  }
}
