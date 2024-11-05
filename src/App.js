import React from "react";
// import Counter from "./components/Counter";
// import InputText from "./components/InputText";
import "./styles/Reset.css";
import "./styles/App.css";
import PostItem from "./components/PostItem.jsx";
function App() {
  return (
    <div className="App">
      {/* <Counter></Counter>
      <InputText></InputText> */}
      <PostItem
        post={{ id: 1, title: "Javascript", body: "Description" }}
      ></PostItem>
      <PostItem
        post={{ id: 2, title: "Javascript", body: "Description" }}
      ></PostItem>
      <PostItem
        post={{ id: 3, title: "Javascript", body: "Description" }}
      ></PostItem>
      <PostItem
        post={{ id: 4, title: "Javascript", body: "Description" }}
      ></PostItem>
      <PostItem
        post={{ id: 5, title: "Javascript", body: "Description" }}
      ></PostItem>
    </div>
  );
}

export default App;
