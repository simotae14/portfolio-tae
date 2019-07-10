import React, { Fragment } from 'react';

class Index extends React.Component {
    render() {
        return (
            <Fragment>
                <h1> Welcome Page! </h1>
                <a href="/"> Home </a>
                <a href="/about"> About </a>
                <a href="/portfolios"> Portfolio </a>
                <a href="/blogs"> Blog </a>
                <a href="/cv"> Cv </a>
            </Fragment>
        );
    }
}

export default Index;