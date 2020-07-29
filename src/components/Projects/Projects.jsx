import React from "react";
import style from './Projects.module.css';
import Project from "./Project/Project";

const Projects = (props) => {
    let project = props.projectsPage.projects.map(el => <Project link={el.link} title={el.title} desc={el.desc}
                                                                 id={el.id} key = {el.id}/>);

    let newProjectElementTitle = React.createRef();
    let newProjectElementDesc = React.createRef();
    let newProjectElementLink = React.createRef();

    let onAddProjects = () => {
        props.addProjects();
    }
    let onProjectChange = () => {
        let title = newProjectElementTitle.current.value;
        let desc = newProjectElementDesc.current.value;
        let link = newProjectElementLink.current.value;
        props.updateNewProject(title, link, desc);
    }

    return (
        <div className={style.content}>
            <div className={style.projects}>
                <h2>My projects</h2>
                {project}
            </div>
            <div className={style.addBlock}>
                <div>Title: <input onChange={onProjectChange}
                                   ref={newProjectElementTitle}
                                   value={props.projectsPage.newProjectTitle}/></div>
                <div>Link: <input onChange={onProjectChange}
                                  ref={newProjectElementLink}
                                  value={props.projectsPage.newProjectLink}/></div>
                <div>Description: <textarea onChange={onProjectChange}
                                            ref={newProjectElementDesc}
                                            value={props.projectsPage.newProjectDesc}/></div>
                <button onClick={onAddProjects} className={style.add}>Add</button>
            </div>
        </div>
    )
}

export default Projects;