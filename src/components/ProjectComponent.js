import React, { Component } from 'react';
import { Button, Media, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

class Project extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.renderExpanded = this.renderExpanded.bind(this);

        this.state = {
            expanded: false
        }
    }

    toggle() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    renderExpanded() {
        if (this.state.expanded && this.props.project.component != null) {
            return (
                <div>
                    {this.props.project.component}
                </div>
            );
        }
        else {
            return(
                <></>
            );
        }
    }

    renderButton() {
        if (this.props.project.component) {
            return (
                <Button color='light-gray' className='col-auto' onClick={this.toggle}>...</Button>
            );
        }
        else {
            return (
                <></>
            );
        }
    }

    render() {
       
        return (
            <div className='mt-2'>
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.project.name}</CardTitle>
                        <CardText>{this.props.project.description}</CardText>
                        {this.renderExpanded()}
                        {this.renderButton()}
                    </CardBody>
                </Card>

            </div>
        );
    }
}

export default Project;