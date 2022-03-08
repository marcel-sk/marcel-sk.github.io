import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutPage';
import Projects from './ProjectsPage';
import Hobbies from './HobbiesPage';
import Resume from './ResumePage';

class Main extends Component {

  render() {
    const AboutPage = () => {
      return(
          <About />
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/about' component={AboutPage} />
          <Route exact path='/projects' component={() => <Projects />} />
          <Route exact path='/hobbies' component={() => <Hobbies />} />
          <Route exact path='/resume' component={() => <Resume />} />
          <Redirect to="/about" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
