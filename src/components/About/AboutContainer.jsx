import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import About from "./About";
import {
    getStatus, updateStatus
} from "../../redux/about-reducer";

class AboutContainer extends React.Component {
    componentDidMount() {
        this.props.getStatus();
    }
    render() {
        return <About status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        status:state.aboutPage.status
    }
}

export default compose(
    connect(mapStateToProps,{getStatus, updateStatus}),
)(AboutContainer)
