import React from "react";
import MainContent from "./MainContent/MainContent";
import style from "./News.module.css";
import Posts from "./Posts/Posts";

const News = (props) => {

    let main = [];
    main.push(props.post[0]);
    let mainCont = {...main[0]};

    let postCont = [...props.post];
    postCont.shift();

    let pagesCount = Math.ceil(props.totalNewsCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <MainContent main={mainCont}/>
            <div className={style.post}><Posts post={postCont}/></div>
            <div className={style.pagi}>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? style.selectedPage:null}
                                     onClick={(e) => {
                                         props.onPageChanged(p);
                                     }}>{p} </span>
                    })}
            </div>
        </div>
    )
}

export default News;