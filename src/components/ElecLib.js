import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, CardTitle, FormFeedback, Card } from 'reactstrap';


class ElecLibComponent extends Component {
    constructor(props){
        super(props);

        this.calculateCurrent = this.calculateCurrent.bind(this);
        this.calculateConsumption = this.calculateConsumption.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.formRef = React.createRef();

        this.state = {
            ovenType: '',
            ovenWattage: '',
            ovenUsage: '',
            fridgeType: '',
            fridgeWattage: '',
            fridgeUsage: '',
            touched: {
                ovenWattage: false,
                ovenUsage: false,
                fridgeWattage: false,
                fridgeUsage: false
            },
            current: 'not calculated',
            consumption: 'not calculated'
        }
    }

    calculateCurrent() {
        this.setState({
            current: 'calculated value'
        })
    }

    calculateConsumption() {
        this.setState({
            consumption: 'calculated value'
        })
    }

    handleInputChange(event) {
        console.log("input changed");
        const target = event.target;
        const value = event.target.value;
        this.setState({
            [target.name]: value
        });
    }

    handleSubmit(event) {
        console.log("submit function called");
        this.calculateCurrent();
        this.calculateConsumption();
        
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true }
        });
    }

    validate(strOvenWattage, strOvenUsage, strFridgeWattage, strFridgeUsage) {
        const ovenWattage = Number(strOvenWattage);
        const ovenUsage = Number(strOvenUsage);
        const fridgeWattage = Number(strFridgeWattage);
        const fridgeUsage = Number(strFridgeUsage);

        const errors = {
            ovenWattage: '',
            ovenUsage: '',
            fridgeWattage: '',
            fridgeUsage: ''
        }
        if (this.state.touched.ovenWattage && ovenWattage < 500) 
            errors.ovenWattage = "Value is too low";
        else if (this.state.touched.ovenWattage && ovenWattage > 10000)
            errors.ovenWattage = "Value is too high";

        if (this.state.touched.ovenUsage && ovenUsage < 0) 
            errors.ovenUsage = "A negative number doesn't make sense here";
        else if (this.state.touched.ovenUsage && ovenUsage > 8)
            errors.ovenUsage = "You cook too much!";

        if (this.state.touched.fridgeWattage && fridgeWattage < 50) 
            errors.fridgeWattage = "Value is too low";
        else if (this.state.touched.fridgeWattage && fridgeWattage > 1500)
            errors.fridgeWattage = "Value is too high";
        
        if (this.state.touched.fridgeUsage && fridgeUsage < 4) 
            errors.fridgeUsage = "Value is too low";
        else if (this.state.touched.fridgeUsage && fridgeUsage > 12)
            errors.fridgeUsage = "Value is too high";

        return errors;
    }

    render() {
        const errors = this.validate(this.state.ovenWattage,
                                    this.state.ovenUsage,
                                    this.state.fridgeWattage,
                                    this.state.fridgeUsage)
        return (
            <div className='container p-0'>
                <div className='row align-items-center'>
                    <div className='col-md-5'>
                        <Form id='myForm' ref={this.formRef}>
                            <CardTitle className='card-title'>Household Sizing Calculator</CardTitle>
                            <p><b>-Oven-</b></p>
                            <FormGroup row>
                                <Label for="ovenType" sm={4}>Type</Label>
                                <Col sm={5}>
                                    <Input type="select" id="ovenType" name="ovenType" 
                                            value={this.state.ovenType}
                                            onChange={this.handleInputChange}>
                                        <option>None</option>
                                        <option>Electric</option>
                                        <option>Gas</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="ovenWattage" sm={4}>Wattage</Label>
                                <Col sm={5}>
                                    <Input id="ovenWattage" name="ovenWattage" 
                                        value={this.state.ovenWattage}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('ovenWattage')}
                                        valid={errors.ovenWattage === ''}
                                        invalid={errors.ovenWattage !== ''}/>
                                    <FormFeedback>{errors.ovenWattage}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="ovenUsage" sm={4}>Usage(hours)</Label>
                                <Col sm={5}>
                                    <Input id="ovenUsage" name="ovenUsage" 
                                        value={this.state.ovenUsage}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('ovenUsage')}
                                        valid={errors.ovenUsage === ''}
                                        invalid={errors.ovenUsage !== ''}/>
                                    <FormFeedback>{errors.ovenUsage}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <p><b>-Fridge-</b></p>
                            <FormGroup row>
                                <Label for="fridgeType" sm={4}>Type</Label>
                                <Col sm={5}>
                                    <Input type="select" id="fridgeType" name="fridgeType" 
                                            value={this.state.fridgeType}
                                            onChange={this.handleInputChange}>
                                        <option>None</option>
                                        <option>Electric</option>
                                        <option>Low-Volt Electric</option>
                                        <option>Propane</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="fridgeWattage" sm={4}>Wattage</Label>
                                <Col sm={5}>
                                    <Input id="fridgeWattage" name="fridgeWattage" 
                                        value={this.state.fridgeWattage}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('fridgeWattage')}
                                        valid={errors.fridgeWattage === ''}
                                        invalid={errors.fridgeWattage !== ''}/>
                                    <FormFeedback>{errors.fridgeWattage}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="fridgeUsage" sm={4}>Usage(hours)</Label>
                                <Col sm={5}>
                                    <Input id="fridgeUsage" name="fridgeUsage" 
                                    value={this.state.fridgeUsage}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('fridgeUsage')}
                                    valid={errors.ovenUsage === ''}
                                    invalid={errors.ovenUsage !== ''}/>
                                    <FormFeedback>{errors.fridgeUsage}</FormFeedback>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className='col-md-2'>
                        <Button onClick={this.handleSubmit}>Calculate {'>>'}</Button>
                    </div>
                    <div className='col-md-4'>
                        <p><b>-Outputs-</b></p>
                        <Card className='col-md-8 px-2 mb-2'>
                            <p>Power Consumption:</p>
                            <p>{this.state.consumption}</p>
                        </Card>
                        <Card className='col-md-8 px-2 mb-2'>
                            <p>Max Current</p>
                            <p>{this.state.current}</p>
                        </Card>
                    </div>
                    <div className='col-md-1 align-self-start ml-auto'>
                        <a className="btn btn-social-icon btn-github" href="http://www.github.com/marcel-sk"><i className="fa fa-github"></i></a>
                    </div>
                </div>
                
            </div>
            
        );
    }

}

export default ElecLibComponent;