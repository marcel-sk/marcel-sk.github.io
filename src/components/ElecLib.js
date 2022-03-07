import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ElecLibComponent extends Component {
    constructor(props){
        super(props);

        this.calculateCurrent = this.calculateCurrent.bind(this);
        this.calculateConsumption = this.calculateConsumption.bind(this);
        this.calculate = this.calculate.bind(this);

        this.state = {
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

    calculate() {
        this.calculateCurrent();
        this.calculateConsumption();
    }

    render() {

        return (
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-5'>
                        <Form>
                            <h3>Household Sizing Calculator</h3>
                            <h4>-Oven-</h4>
                            <FormGroup row>
                                <Label for="selectOvenType" sm={4}>Type</Label>
                                <Col sm={5}>
                                    <Input type="select" id="selectOvenType">
                                        <option>None</option>
                                        <option>Electric</option>
                                        <option>Gas</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="OvenWattage" sm={4}>Wattage</Label>
                                <Col sm={5}>
                                    <Input id="OvenWattage"/>
                            
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="OvenUsage" sm={4}>Usage(hours)</Label>
                                <Col sm={5}>
                                    <Input id="OvenUsage"/>
                                </Col>
                            </FormGroup>
                            <h4>-Fridge-</h4>
                            <FormGroup row>
                                <Label for="selectOFridgeType" sm={4}>Type</Label>
                                <Col sm={5}>
                                    <Input type="select" id="selectOvenType">
                                        <option>None</option>
                                        <option>Electric</option>
                                        <option>Low-Volt Electric</option>
                                        <option>Propane</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="FridgeWattage" sm={4}>Wattage</Label>
                                <Col sm={5}>
                                    <Input id="FridgeWattage"/>
                            
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="FridgeUsage" sm={4}>Usage(hours)</Label>
                                <Col sm={5}>
                                    <Input id="FridgeUsage"/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className='col-md-2'>
                        <Button onClick={this.calculate}>Calculate {'>>'}</Button>
                    </div>
                    <div className='col-md-5'>
                        <p>Power Consumption:</p>
                        <p>{this.state.consumption}</p>
                        <p>Max Current</p>
                        <p>{this.state.current}</p>
                    </div>
                </div>
                
            </div>
            
        );
    }

}

export default ElecLibComponent;