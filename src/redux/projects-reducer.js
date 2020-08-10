const ADD_PROJECTS = 'ADD-PROJECTS';

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
    ]
}

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_PROJECTS:
            let newProjects = {
                id: 'x',
                link: action.data.link,
                desc: action.data.desc,
                title: action.data.title
            }
            return  {
                ...state,
                projects: [...state.projects, newProjects]
            };

        default:
            return state;
    }
}
export const addProjects = (data) => ({type: ADD_PROJECTS, data})

export default projectsReducer;