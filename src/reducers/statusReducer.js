import {
  START_GAME,
  START_AGAIN,
  CHECK_GAME,
  PICK_NUM,
  SET_WINNER
} from "./actions";

const defaultState = {
  isStart: false,
  turn: "A",
  winner: null
};

export function statusReducer(state = defaultState, action) {
  switch (action.type) {
    case START_GAME:
      console.log("STATUS_REDUCER START_GAME");
      return applyStartGameStatus(state, action);
    case START_AGAIN:
      return applyStartAgainStatus(state, action);
    case CHECK_GAME:
      return applyCheckGameStatus(state, action);
    case PICK_NUM:
      console.log("STATUS_REDUCER PICK_NUM");
      return applyPickNumStatus(state, action);
    case SET_WINNER:
      return applySetWinnerStatus(state, action);
    default:
      console.log("DEFAULT");
      return {
        ...state,
        isStart: false,
        turn: "A",
        winner: null
      };
  }
}

function applyStartGameStatus(state, action) {
  console.log("START_GAME");
  return {
    ...state,
    isStart: true,
    turn: "A",
    winner: null
  };
}
function applyStartAgainStatus(state, action) {
  console.log("START_AGAIN");
  return {
    ...state,
    isStart: true
  };
}
function applyCheckGameStatus(state, action) {
  console.log("CHECK_GAME");
  const turn = state.turn === "A" ? "B" : "A";
  return {
    ...state,
    turn
  };
}

function applyPickNumStatus(state, action) {
  console.log("PICK_NUM");
  const turn = state.turn === "A" ? "B" : "A";
  return {
    ...state,
    turn
  };
}

function applySetWinnerStatus(state, action) {
  console.log("SET_WINNER");
  return {
    ...state,
    winner: action.payload
  };
}
