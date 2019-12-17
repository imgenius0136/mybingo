import React, { Component } from "react";
import { connect } from "react-redux";
import BoardCell from "./BoardCell";

class BoardContainer extends Component {
  _makeBoard() {
    return this.props.stages[this.props.player].map((elem, i) => {
      const key = this.props.player + i;
      return <BoardCell elem={elem} key={key} player={this.props.player} />;
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="board">
        <h2>Player {this.props.player}</h2>
        <div className="player-board">{this._makeBoard()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    stages: state.basicReducer,
    turn: state.turn
  };
};

export default connect(mapStateToProps)(BoardContainer);
