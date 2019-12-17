import React, { Component } from "react";
import { connect } from "react-redux";
import { pickNum } from "../reducers/actions";

class BoardCell extends Component {
  onClickHandler = e => {
    console.log(this.props);

    if (!this.props.isStart) {
      alert("게임시작버튼을 눌러주세요.");
    } else if (this.props.turn !== this.props.player) {
      alert("본인 차례가 아닙니다.");
    } else if (this.props.elem.isClicked) {
      alert("선택된 번호 입니다.");
    } else {
      this.props.pickNum(this.props.elem.num);
    }
  };
  render() {
    const isClicked = this.props.elem.isClicked ? "clicked" : "";

    return (
      <div className={`item ${isClicked}`} onClick={this.onClickHandler}>
        {this.props.elem.num}
      </div>
    );
  }
}

// export default BoardCell;

const mapStateToProps = state => {
  return {
    isStart: state.statusReducer.isStart,
    turn: state.statusReducer.turn
  };
};

export default connect(mapStateToProps, { pickNum })(BoardCell);
