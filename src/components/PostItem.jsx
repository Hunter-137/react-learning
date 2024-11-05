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
