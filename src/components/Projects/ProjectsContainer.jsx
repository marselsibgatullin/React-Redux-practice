import React from "react";
import {addProjects, updateNewProject} from "../../redux/projects-reducer";
import Projects from "./Projects";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        projectsPage: state.projectsPage
    }
}


export default compose(
    connect(mapStateToProps, {addProjects,updateNewProject})
)(Projects)