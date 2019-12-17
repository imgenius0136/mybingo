import { START_GAME, START_AGAIN, CHECK_GAME, PICK_NUM } from "./actions";
import { beforeStartState, setClicked, countBingo } from "./util";

const initialState = beforeStartState();

//reducer
export function basicReducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      console.log("SETTING_REDUCER START_GAME");
      return applyStartGame(state, action);
    case PICK_NUM:
      console.log("SETTING_REDUCER PICK_NUM");
      return applyPickNum(state, action);
    case START_AGAIN:
      return applyStartAgain(state, action);
    case CHECK_GAME:
      return applyCheckGame(state, action);
    default:
      return state;
  }
}

function applyStartGame(state, action) {
  const { A, B } = action.payload;
  return {
    ...state,
    A,
    B,
    cnt_a: 0,
    cnt_b: 0
  };
}

function applyPickNum(state, action) {
  // console.log(action.payload + "입니다");
  console.log(state);
  const A = setClicked(action.payload, state.A);
  const B = setClicked(action.payload, state.B);
  const cnt_a = countBingo(state.A);
  const cnt_b = countBingo(state.B);
  console.log(cnt_a);
  console.log(cnt_b);
  return {
    A,
    B,
    cnt_a,
    cnt_b
  };
}

function applyStartAgain(state, action) {}
function applyCheckGame(state, action) {}
