import React from "react";
import {connect} from "react-redux";
import {
    getNews,
    setCurrentPage,
} from "../../redux/news-reducer";
import News from "./News";
import Preloader from "../common/Preloader/Preloader";

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.getNews(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getNews(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
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
        setCurrentPage, getNews
    })(NewsContainer);
