import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/hobbies">Hobbies</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Contact</h5>
                    <address>
                        596729 Concession 10<br />
                        Chatsworth, On.<br />
                        <i className="fa fa-phone fa-lg"></i>: (437) 580-8398<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:marcel.s@hotmail.ca">marcel.s@hotmail.ca</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-github" href="http://www.github.com/marcel-sk"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/marcel-skura"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon" href="mailto:marcel.s@hotmail.ca"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>Demo Site- Updated March 6th, 2022</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;