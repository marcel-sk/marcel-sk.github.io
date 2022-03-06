import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import Jumbotron from './Jumbotron';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        {/*
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='M.Skura' /></NavbarBrand>
                        */}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/about'><span className="fa fa-home fa-lg"></span> About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/projects'><span className="fa fa-list fa-lg"></span> Projects</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/hobbies'><span className="fa fa-list fa-lg"></span> Hobbies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/resume'><span className="fa fa-file fa-lg"></span> Resume</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header align-top">
                            <div className="col-12 col-sm-6">
                                <h1>Marcel Skura</h1>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
export default Header;