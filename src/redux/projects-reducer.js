const ADD_PROJECTS = 'ADD-PROJECTS';
const UPDATE_NEW_PROJECT = 'UPDATE-NEW-PROJECT';

let initialState = {
    projects: [
        {
            id: 1,
            link: 'https://github.com/marselsibgatullin/Diplom',
            desc: 'Description',
            title: 'Graduate qualification work'
        },
        {
            id: 2,
            link: 'https://github.com/marselsibgatullin/React-Redux-practice',
            desc: 'Description',
            title: 'React-redux learning practice'
        }
    ],
    newProjectTitle: 'Project title',
    newProjectDesc: 'Project description',
    newProjectLink: ''
}

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_PROJECTS:
            let newProjects = {
                id: 'x',
                link: state.newProjectLink,
                desc: state.newProjectDesc,
                title: state.newProjectTitle
            }
            return  {
                ...state,
                newProjectTitle: '',
                newProjectDesc: '',
                newProjectLink: '',
                projects: [...state.projects, newProjects]
            };

        case UPDATE_NEW_PROJECT:
            return  {
                ...state,
                newProjectLink: action.newLink,
                newProjectDesc: action.newDesc,
                newProjectTitle: action.newTitle
            };

        default:
            return state;
    }
}
export const addProjects = () => ({type: ADD_PROJECTS})
export const updateNewProject = (title, link, desc) => ({
    type: UPDATE_NEW_PROJECT,
    newTitle: title,
    newLink: link,
    newDesc: desc
})

export default projectsReducer;