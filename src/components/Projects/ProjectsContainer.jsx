import React from "react";
import {addProjects, updateNewProject} from "../../redux/projects-reducer";
import Projects from "./Projects";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        projectsPage: state.projectsPage
    }
}


const ProjectsContainer = connect(mapStateToProps,
    {
    addProjects,updateNewProject
    })(Projects);

export default ProjectsContainer;