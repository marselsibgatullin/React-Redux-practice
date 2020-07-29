import React from "react";
import {connect} from "react-redux";
import {setCurrentPage, setPosts, setTotalNewsCount, toggleIsFetching} from "../../redux/news-reducer";
import * as axios from "axios";
import News from "./News";
import Preloader from "../common/Preloader/Preloader";


class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`http://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=5495a97e2ea541478caa583b30617675&page=${this.props.currentPage}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setPosts(response.data.articles);
                this.props.setTotalNewsCount(response.data.totalResults)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`http://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=5495a97e2ea541478caa583b30617675&page=${pageNumber}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setPosts(response.data.articles)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader />: null}
            <News onPageChanged={this.onPageChanged} totalNewsCount={this.props.totalNewsCount}
                  pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                  post={this.props.post} isFetching={this.props.isFetching}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        post: state.newsPage.post,
        pageSize: state.newsPage.pageSize,
        totalNewsCount: state.newsPage.totalNewsCount,
        currentPage: state.newsPage.currentPage,
        isFetching: state.newsPage.isFetching
    }
}

export default connect(mapStateToProps,
    {
        setPosts, setCurrentPage,
        setTotalNewsCount, toggleIsFetching
    })(NewsContainer);
