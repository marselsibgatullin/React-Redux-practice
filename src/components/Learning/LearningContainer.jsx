import React from "react";
import Learning from "./Learning";
import {connect} from "react-redux";
import {setLinksContent} from "../../redux/learning-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class LearningContainer extends React.Component {
    componentDidMount() {
        this.props.setLinksContent(this.props.match.params.techsNames, this.props.learningPage.techsLinks);
    }

    render() {
        return <Learning
            {...this.props}
            techsNames={this.props.learningPage.techsNames}
            techsLinks={this.props.learningPage.currentLink}/>
    }
}

let mapStateToProps = (state) => {
    return {
        learningPage: state.learningPage
    }
}

export default compose(
    connect(mapStateToProps, {setLinksContent}),
    withRouter
)(LearningContainer)
