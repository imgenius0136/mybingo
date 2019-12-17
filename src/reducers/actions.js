import { randomGenerator, getWinner } from "./util";

export const START_GAME = "START_GAME";
export const START_AGAIN = "START_AGAIN";
export const CHECK_GAME = "CHECK_GAME";
export const PICK_NUM = "PICK_NUM";
export const SET_WINNER = "SET_WINNER";

export const startGame = () => {
  console.log("startGame");
  const A = randomGenerator();
  const B = randomGenerator();
  console.log(A);
  console.log(B);
  return {
    type: START_GAME,
    payload: { A, B }
  };
};

export const startAgain = () => {
  return {
    type: START_AGAIN
  };
};

export const checkGame = () => {
  return {
    type: CHECK_GAME
  };
};

export const pickNum = num => (dispatch, getState) => {
  console.log("action pickNum");
  let winner;
  dispatch({ type: PICK_NUM, payload: num });

  winner = getWinner(getState().basicReducer);
  if (winner) {
    dispatch({ type: SET_WINNER, payload: winner });
  }
};
