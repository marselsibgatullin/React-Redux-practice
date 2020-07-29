import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import LearningContainer from "./components/Learning/LearningContainer";
import NewsContainer from "./components/News/NewsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/'
                       render={() => <NewsContainer />}/>
                <Route exact path='/news'
                       render={() => <NewsContainer />}/>
                <Route exact path='/learning/:techsNames'
                       render={() => <LearningContainer />}/>
                <Route exact path='/learning'
                       render={() => <LearningContainer />}/>
                <Route exact path='/projects'
                       render={() => <ProjectsContainer />}/>
                <Route exact path='/about'
                       render={() => <About/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;