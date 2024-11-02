import React from "react";
// import Counter from "./components/Counter";
// import InputText from "./components/InputText";
import "./styles/Reset.css";
import "./styles/App.css";
function App() {
  return (
    <div className="App">
      {/* <Counter></Counter>
      <InputText></InputText> */}

      <div className="wrapper">
        <div className="list">
          <div className="item">
            <div className="item__text">
              <h2 className="titles">1. Javascript</h2>
              <p className="descs"> Javascript — это язык программирования</p>
            </div>
            <div className="item__btn">
              <button className="descs">Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
