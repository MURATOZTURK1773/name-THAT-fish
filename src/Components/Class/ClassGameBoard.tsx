import React, { Component } from "react";
import "./styles/game-board.css";
import { initialFishes } from "./Constants";

interface Props {
  fishIndex: number;
  handleAnswer: (answer: string) => void;
}

interface State {
  userGuess: string;
}

export class ClassGameBoard extends Component<Props, State> {
  state = {
    userGuess: "",
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.handleAnswer(this.state.userGuess);
    this.setState({ userGuess: "" });
  };

  render() {
    const { fishIndex } = this.props;
    const fishData = initialFishes[fishIndex];
    const imageUrl = fishData.url;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={imageUrl} alt={fishData.name} />
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
