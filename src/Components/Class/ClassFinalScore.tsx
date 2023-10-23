import { Component } from "react";

interface Props {
  correctCount: number;
  totalCount: number;
}

export class ClassFinalScore extends Component<Props> {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.correctCount}</p>
          <hr />
          <p>{this.props.totalCount}</p>
        </div>
      </div>
    );
  }
}
