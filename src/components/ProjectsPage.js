import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import {Link} from 'react-router-dom';
import Project from './ProjectComponent';
import PROJECTS from '../shared/projects';

class Projects extends Component {

    renderProject({project}) {
        return(
            <div className='col-12'>

            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/about'>About</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Projects</BreadcrumbItem>
                    </Breadcrumb>
                    <h1>Current Projects</h1>
                </div>
                <div className="row">
                    {PROJECTS.map((proj) => {
                        return (
                            <Project project={proj}/>
                        );
                    })}
                </div>
                
            </div>
        );
    }
}

export default Projects;