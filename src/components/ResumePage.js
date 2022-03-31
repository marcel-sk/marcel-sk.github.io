import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import resumePdf from '../Marcel_Res_2022.pdf';

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
                <div className='row'> 
                    <iframe className='col-12 responsive-iframe' height='1000' src={resumePdf} title="resume"/>
                </div>
            </div>
        );
    }
}

export default Resume;