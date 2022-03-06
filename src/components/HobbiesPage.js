import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

class Hobbies extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/about'>About</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Hobbies</BreadcrumbItem>
                    </Breadcrumb>
                    <h4>Hobbies Page</h4>
                    <p>I have no hobbies. I work all the time</p>
                    <p>One day I will have lots of content here</p>
                </div>
            </div>
            
        );
    }
}

export default Hobbies;