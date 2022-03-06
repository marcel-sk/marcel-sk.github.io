import React from 'react';
import { Media, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

function About(props) {
    return(
      <div className="container">
        <div className="row">
          <Breadcrumb>
              <BreadcrumbItem active>About</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Media className='row mt-2 mb-2' >
          <div className="col-auto mr-1">
            <Media left>
              <Media object src="assets/images/main_profile.jpg" alt="Marcel Skura" height='400px'/>
            </Media>
          </div>
          <div className="col-auto">
            <Media heading>
              Who Am I?
            </Media>
            <Media body>
              <p>Here is a whole bunch of text...</p>
              <p>Here is a whole bunch of text...</p>
              <p>Here is a whole bunch of text...</p>
              <p>Here is a whole bunch of text...</p>
              <p>Here is a whole bunch of text...</p>
              <p>Here is a whole bunch of text...</p>
              <p>Here is a whole bunch of text...</p>
            </Media>
          </div>
        </Media>
      </div>
    );
}

export default About;   