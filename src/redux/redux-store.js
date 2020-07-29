import {combineReducers, createStore} from "redux";
import projectsReducer from "./projects-reducer";
import newsReducer from "./news-reducer";
import learningReducer from "./learning-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    projectsPage:projectsReducer,
    newsPage:    newsReducer,
    learningPage:learningReducer,
    auth: authReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;