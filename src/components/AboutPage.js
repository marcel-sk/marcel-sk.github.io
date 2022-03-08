import React from 'react';
import { Media, Breadcrumb, BreadcrumbItem, Form, Card } from 'reactstrap';

function About(props) {
    return(
      <div className="container">
        <div className="row">
          <Breadcrumb>
              <BreadcrumbItem active>About</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Media className='row mt-2 mb-2' >
          
          <Media left className="col-12 col-md-auto mr-1 mb-3">
            <Media object src="assets/images/main_profile.jpg" alt="Marcel Skura" height='400px'/>
          </Media>
          <div className="col">
            <Media heading>
              Who Am I?
            </Media>
            <Media body>
              <p>I am a self-driven, highly motivated individual with a broad skill set in computing. My knowledge and experience range from low level hardware and embedded system languages like Structured Text to Machine Learning, and Modern Frameworks. I am making the shift from Robotic Automation Software into pure Computer Software and have been actively learning new skills to make that a reality. I am looking forward to continuing to learn in a practical product-driven environment.</p>
              <p>Here is a whole bunch of text...</p>
              <p>Here is a whole bunch of text...</p>
              <p>Here is a whole bunch of text...</p>
              <p>Here is a whole bunch of text...</p>
              <p>Here is a whole bunch of text...</p>
              <p>Here is a whole bunch of text...</p>
            </Media>
          </div>
        </Media>
        <div className="row row-content">
          <div className='col-md-4'>
            
            <div className="col">
              <h3>Location Information</h3>
              <h5>Address</h5>
              <address>
              596729 Concession 10<br />
              Chatsworth, On.<br />
              Canada<br />
              N0H 1G0<br />
              <i className="fa fa-phone"></i>: (437) 580-8398<br />
              <i className="fa fa-envelope"></i>: <a href="mailto:marcel.s@hotmail.ca">marcel.s@hotmail.ca</a>
              </address>
            </div>
            <div className="col-12 col-sm-11">
              <div className="btn-group" role="group">
                <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                <a role="button" className="btn btn-success" href="mailto:marcel.s@hotmail.ca"><i className="fa fa-envelope-o"></i> Email</a>
              </div>
            </div>
          </div>
          <Card className='col-md-6'>
            <Form>
              <p>-form for sending an email-</p>
            </Form>
          </Card>
        </div>
      </div>
    );
}

export default About;   