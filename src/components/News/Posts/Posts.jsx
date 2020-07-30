import React from "react";
import style from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let post = props.post.map(el => <Post link={el.url} img={el.urlToImage} title={el.title} key = {el.title + el.url}/>)
    return (
      <div className={style.posts}>
          {post}
      </div>
  );
}

export default Posts;
