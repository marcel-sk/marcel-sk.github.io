import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
//import Main from './components/MainComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import About from './components/AboutPage';
import Projects from './components/ProjectsPage';
import Hobbies from './components/HobbiesPage';
import Resume from './components/ResumePage';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path='/about'><About /></Route>
            <Route path='/projects'><Projects /></Route>
            <Route path='/hobbies'><Hobbies /></Route>
            <Route path='/resume'><Resume /></Route>
            <Redirect to='/about' />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
