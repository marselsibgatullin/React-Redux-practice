import React from "react";
import style from './Post.module.css';

const Post = (props) => {
  return (
      <div className={style.descr}>
        <a href={props.link} className={style.link}>
          <div>
            <img className={style.img} src={props.img}/>
          </div>
          <div>
            <p className={style.title}>{props.title}</p>
          </div>
        </a>
      </div>  );
}

export default Post;
