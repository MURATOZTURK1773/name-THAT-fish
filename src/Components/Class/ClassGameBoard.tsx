import React, { Component } from "react";
import "./styles/game-board.css";
import { initialFishes } from "./Constants";
import { ClassFinalScore } from "./ClassFinalScore";

interface Props {
  answersLeft: string[];
  fishIndex: number;
  userGuess: string;
  handleAnswer: (answer: string) => void;
  correctCount: number;
  totalCount: number;
}

interface State {
  userGuess: string;
}

export class ClassGameBoard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      userGuess: props.userGuess,
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userGuess } = this.state;
    this.props.handleAnswer(userGuess);
  };

  render() {
    const { answersLeft, fishIndex, correctCount } = this.props;
    const nextFishToName = answersLeft[fishIndex];
    const fishData = initialFishes[fishIndex];
    const imageUrl = fishData ? fishData.url : "";

    if (!fishData || !fishData.url) {
      return (
        <ClassFinalScore correctCount={correctCount} totalCount={fishIndex} />
      );
    }

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={imageUrl} alt={nextFishToName} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.userGuess}
            onChange={(e) => this.setState({ userGuess: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
