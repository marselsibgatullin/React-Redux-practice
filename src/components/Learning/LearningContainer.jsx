import React from "react";
import Learning from "./Learning";
import {connect} from "react-redux";
import {setLinks} from "../../redux/learning-reducer";
import { withRouter } from "react-router-dom";

class LearningContainer extends React.Component {
    componentDidMount() {
        if(this.props.match.params.techsNames === "css")
            this.props.setLinks(this.props.learningPage.techsLinks.css)
        else if(this.props.match.params.techsNames === "html")
            this.props.setLinks(this.props.learningPage.techsLinks.html)
        else if(this.props.match.params.techsNames === "js")
            this.props.setLinks(this.props.learningPage.techsLinks.js)
        else if(this.props.match.params.techsNames === "php")
            this.props.setLinks(this.props.learningPage.techsLinks.php)
        else this.props.setLinks(this.props.learningPage.techsLinks.empty)
    }


    render() {
        debugger;
        return <Learning
            {...this.props}
            techsNames={this.props.learningPage.techsNames}
            techsLinks={this.props.learningPage.currentLink}/>
    }
}

let mapStateToProps = (state) => {
    return {
        learningPage : state.learningPage
    }
}

let url = withRouter(LearningContainer);

export default connect(mapStateToProps,{setLinks})(url);

