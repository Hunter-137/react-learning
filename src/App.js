import React, { useState } from "react";
// import Counter from "./components/Counter";
// import InputText from "./components/InputText";
import "./styles/Reset.css";
import "./styles/App.css";
import PostList from "./components/PostList.jsx";
function App() {
  const [postsArr, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);

  const [postsArr2, setPosts2] = useState([
    { id: 1, title: "Python", body: "Description" },
    { id: 2, title: "Python 2", body: "Description" },
    { id: 3, title: "Python 3", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList post={postsArr} title={"Посты про JS"}></PostList>
      <PostList post={postsArr2} title={"Посты про Python"}></PostList>
    </div>

    /* <Counter></Counter>
      <InputText></InputText> */
  );
}

export default App;
