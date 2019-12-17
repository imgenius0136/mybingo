import React from "react";
import initialStore from "./initialStore";
import { Provider } from "react-redux";
import BoardContainer from "./components/BoardContainer";
import ButtonContainer from "./components/ButtonContainer";
import ScoreContainer from "./components/ScoreContainer";
const store = initialStore();
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header"></div>
        <div className="App-container">
          <ButtonContainer />
          <BoardContainer player="A" />
          <BoardContainer player="B" />
          <ScoreContainer />
        </div>
        <div className="App-footer"></div>
      </div>
    </Provider>
  );
}

export default App;
