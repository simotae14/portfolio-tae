import React, { Fragment } from 'react';
// This is the Link API
import Link from 'next/link';

class Header extends React.Component {
    render() {
        const title = this.props.title;
        return (
            <Fragment>
                <p>
                     { title }
                </p>
                { this.props.children }
                <Link href="/">
                    <a> Home </a>
                </Link>
                <Link href="/about">
                    <a> About </a>
                </Link>
                <Link href="/portfolios">
                    <a> Portfolio </a>
                </Link>
                <Link href="/blogs">
                    <a> Blog </a>
                </Link>
                <Link href="/cv">
                    <a> Cv </a>
                </Link>
            </Fragment>
        );
    }
}

export default Header;