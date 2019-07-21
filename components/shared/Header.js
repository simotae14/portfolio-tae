import React, { Fragment } from 'react';
// This is the Link API
import Link from 'next/link';
import '../../styles/main.scss';

class Header extends React.Component {
    render() {
        return (
            <Fragment>
                <Link href="/">
                    <a style={{ 'fontSize': '20px' }}> Home </a>
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
                <style jsx>
                    {
                        `
                            a {
                                font-size: 20px;
                            };
                            .customClass {
                                color: red;
                            }
                        `
                    }
                </style>
            </Fragment>
        );
    }
}

export default Header;