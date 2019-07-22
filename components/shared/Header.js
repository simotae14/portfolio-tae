import React from 'react';
// This is the Link API
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

const BsNavLink = ({ route, title }) => (
    <Link href={route}>
        <a className="nav-link"> { title } </a>
    </Link>
);

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
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Simone Taeggi</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <BsNavLink title="Home" route="/" />
                            </NavItem>
                            <NavItem>
                                <BsNavLink title="About" route="/about" />
                            </NavItem>
                            <NavItem>
                                <BsNavLink title="Portfolio" route="/portfolios" />
                            </NavItem>
                            <NavItem>
                                <BsNavLink title="Blog" route="/blogs" />
                            </NavItem>
                            <NavItem>
                                <BsNavLink title="Cv" route="/cv" />
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
