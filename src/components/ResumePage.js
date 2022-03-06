import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

import resumePdf from '../MarcelSkura_Resume_2022.pdf';

class Resume extends Component {
   

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/about'>About</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Resume</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className='row row-content'>
                    <iframe src={resumePdf} title="resume" height='1000'/>
                </div>
            </div>
        );
    }
}

export default Resume;