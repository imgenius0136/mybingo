import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame } from "../reducers/actions";

class ButtonContainer extends Component {
  onClickHandelr = () => {
    this.props.startGame();
  };

  render() {
    console.log("버튼");
    console.log(this.props);
    const comment = this.props.isStart ? "PLAY AGAIN" : "GAME START";
    console.log(this.props);
    return <button onClick={this.onClickHandelr}>{comment}</button>;
  }
}

const mapStateToProps = state => {
  return {
    isStart: state.statusReducer.isStart
  };
};

export default connect(mapStateToProps, { startGame })(ButtonContainer);
