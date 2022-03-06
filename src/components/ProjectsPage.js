import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

class Projects extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/about'>About</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Projects</BreadcrumbItem>
                    </Breadcrumb>
                    <h4>Projects Page</h4>
                </div>
                
            </div>
        );
    }
}

export default Projects;