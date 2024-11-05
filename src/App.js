import React, { useState } from "react";
// import Counter from "./components/Counter";
// import InputText from "./components/InputText";
import "./styles/Reset.css";
import "./styles/App.css";
import PostItem from "./components/PostItem.jsx";
function App() {
  const [postsObj, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);

  return (
    <div className="App">
      {postsObj.map((postObj) => (
        <PostItem post={postObj} key={postObj.id}></PostItem>
      ))}
    </div>

    /* <Counter></Counter>
      <InputText></InputText> */
  );
}

export default App;
