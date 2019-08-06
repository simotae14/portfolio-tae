import React from 'react';
// This is the Link API
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem } from 'reactstrap';
import auth0 from '../../services/auth0';


const BsNavLink = ({ route, title }) => (
    <Link href={route}>
        <a className="port-navbar-link nav-link"> { title } </a>
    </Link>
);

// Login Component
const Login = () => {
    return (
        <span onClick={auth0.login} className="port-navbar-link nav-link clickable"> Login </span>
    )
}

// Logout Component
const Logout = () => {
    return (
        <span onClick={auth0.logout} className="port-navbar-link nav-link clickable"> Logout </span>
    )
}

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="absolute port-navbar port-default" color="transparent" dark expand="md">
                    <NavbarBrand className="port-navbar-brand" href="/">Simone Taeggi</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="port-navbar-item">
                                <BsNavLink title="Home" route="/" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink title="About" route="/about" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink title="Portfolio" route="/portfolios" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink title="Blog" route="/blogs" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink title="Cv" route="/cv" />
                            </NavItem>
                            {
                                !auth0.isAuthenticated() ? (
                                    <NavItem className="port-navbar-item">
                                        <Login />
                                    </NavItem>
                                ) : (
                                    <NavItem className="port-navbar-item">
                                        <Logout />
                                    </NavItem>
                                )
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
