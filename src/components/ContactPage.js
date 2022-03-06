import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
//import { Control, Form, Errors} from 'react-redux-form';

class Contact extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/about'>About</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact</h3>
                        <hr/>
                        <p>Feel free to call me or send me a message any time through LinkedIn, by email, or by phone.</p>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Address</h5>
                            <address>
                            596729 Concession 10<br />
                            Chatsworth, On.<br />
                            Canada<br />
                            <i className="fa fa-phone"></i>: (437) 580-8398<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;