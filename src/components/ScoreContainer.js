import React, { Component } from "react";
import { connect } from "react-redux";

class ScoreContainer extends Component {
  render() {
    console.log("@@@");
    console.log(this.props);
    const { winner, cnt_a, cnt_b } = this.props;

    return (
      <div>
        <p>Player A score : {cnt_a}</p>
        <p>Player B score : {cnt_b}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // ...state,
    cnt_a: state.basicReducer.cnt_a,
    cnt_b: state.basicReducer.cnt_b,
    winner: state.statusReducer.winner
  };
};

export default connect(mapStateToProps)(ScoreContainer);
