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