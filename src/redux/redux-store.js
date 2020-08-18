import {applyMiddleware, combineReducers, createStore} from "redux";
import projectsReducer from "./projects-reducer";
import newsReducer from "./news-reducer";
import learningReducer from "./learning-reducer";
import authReducer from "./auth-reducer";
import aboutReducer from "./about-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    projectsPage:projectsReducer,
    newsPage:    newsReducer,
    learningPage:learningReducer,
    auth: authReducer,
    aboutPage: aboutReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;