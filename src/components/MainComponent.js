import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutPage';
import Projects from './ProjectsPage';
import Hobbies from './HobbiesPage';
import Contact from './ContactPage';
import Resume from './ResumePage';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

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
          <Route exact path='/contact' component={() => <Contact />} />
          <Route exact path='/resume' component={() => <Resume />} />
          <Redirect to="/about" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
