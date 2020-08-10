import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import LearningContainer from "./components/Learning/LearningContainer";
import NewsContainer from "./components/News/NewsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import AboutContainer from "./components/About/AboutContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/'
                       render={() => <NewsContainer/>}/>
                <Route exact path='/news'
                       render={() => <NewsContainer/>}/>
                <Route exact path='/learning/:techsNames'
                       render={() => <LearningContainer/>}/>
                <Route exact path='/learning'
                       render={() => <LearningContainer/>}/>
                <Route exact path='/projects'
                       render={() => <ProjectsContainer/>}/>
                <Route exact path='/about'
                       render={() => <AboutContainer/>}/>
                <Route exact path='/login'
                       render={() => <Login />}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;