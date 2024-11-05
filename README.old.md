# react-learning

### Установка:

1. Для установки react требуется команда: `npx create-react-app .`
2. Далее стандартные команды:
   2.1 `npm start`
   Starts the development server.
   2.2 `npm run build`
   Bundles the app into static files for production.
   2.3 `npm test`
   Starts the test runner.
   2.4 `npm run eject`
   Removes this tool and copies build dependencies, configuration files
   and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:
cd C:\Users\user\Desktop\mine\react-learning
npm start

### Основные хуки реакта:

#### 1.useState() — с помощью него можно рендерить данные (следить за состоянием)

У него есть 2 параметра: `state` — начальные данные, `setState()` — функция
— их обычно деструктуризируют

Чтобы изменить начальные данные, необходимо в самой функции, как в передаче аргументов, прописать:
setState(state + 1)

И как раз функция позволит отрендерить на странице то, что передали в параметры функции `setState()`

---

#### 2.useEffect()

#### 3.useRef()

#### 4.useMemo()

#### 5.useCallback()

#### 6.useContext()


### Props в компонентах

Props — это своего рода аргументы в функциях, внутрь которого мы можем что-нибудь положить

компонент PostItem.jsx
```
import React from "react";
const PostItem = (props) => {
  console.log(props);
  return (
    ...
  );
};

export default PostItem;
```
Если мы откроем сам аргумент внутри функции через консоль, то убедимся, что это объект.

#### Как передать в props свойства?

корневой файл App.js
```
import React from "react";
import "./styles/Reset.css";
import "./styles/App.css";
import PostItem from "./components/PostItem.jsx";
function App() {
  return (
    <div className="App">
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
```
Свойства внутрь пропса мы можем легко закинуть, добавив атрибуты к компоненту
В данном случае `post` будет являться объектом внутри объекта `props`
А уже внутри `post` мы можем прописать синтаксисом объектов все ключи и значения, которые нам нужны
```
<PostItem
   post={{ id: 2, title: "Javascript", body: "Description" }}
></PostItem>
```

#### Как отрисовать закинутые пропсы?
В самом компоненте закидываем пути к значениям ключей нашего объекта вместо потенциального текста

```
import React from "react";
const PostItem = (props) => {
  // console.log(props);
  // console.log(props.post.id);
  return (
    <div className="post__wrapper">
      <div className="post__list">
        <div className="post__item">
          <div className="post-item__text">
            <h2 className="post-titles titles">{props.post.id} {props.post.title}</h2>
            <p className="post-descs descs"> {props.post.body}</p>
          </div>
          <div className="post-item__btn">
            <button className="post-descs descs">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
```

### Обработка множество компонентов

```
import React, { useState } from "react";
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
```

Если нам нужно прописать компоненты несколько десятков раз, то можно использовать useState, который нам всё отрисует
А в качестве начального значения мы поместим туда массив с объектами

```
const [postsObj, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);
```

Далее, так кк мы уже поняли, что в пропсы мы закидываем объект с ключами и значениями
Мы просто пробежимся по массиву, добавляя на каждой итерации наш компонент с атрибутом
С атрибутом внутри которого будет содержаться объект с подготовленными ключами и значениями

А в конце необходимо добавить уникальный id к атрибуту key (мы его тоже создаем сами)
Нужен для того, чтобы реакту было легче обновлять DOM дерево — обновлять только то, что поменялось, а не весь массив