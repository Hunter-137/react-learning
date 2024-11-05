import React from "react";
import PostItem from "./PostItem.jsx";

const PostList = ({ post, title }) => {
  // console.log(post);
  return (
    <div>
      <h1 className="titles" style={{ textAlign: "center" }}>
        {title}
      </h1>
      {post.map((postObj) => {
        return <PostItem post={postObj} key={postObj.id}></PostItem>;
      })}
    </div>
  );
};

export default PostList;
