import React from "react";
import style from './Projects.module.css';
import Project from "./Project/Project";
import {AddProjectsReduxForm} from "./AddProjectsForm";

const Projects = (props) => {
    let project = props.projectsPage.projects.map(el => <Project link={el.link} title={el.title} desc={el.desc}
                                                                 id={el.id} key = {el.id}/>);

    let addNewProjects = (values) => {
        props.addProjects(values);
    }

    return (
        <div className={style.content}>
            <div className={style.projects}>
                <h2>My projects</h2>
                {project}
            </div>
            <div className={style.addBlock}>
                <h2>Add Project</h2>
                <AddProjectsReduxForm onSubmit={addNewProjects}/>
            </div>
        </div>
    )
}

export default Projects;