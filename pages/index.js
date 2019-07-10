import React, { Fragment } from 'react';
import Header from '../components/shared/Header';

class Index extends React.Component {
    render() {
        return (
            <Fragment>
                <h1> Welcome Page! </h1>
                <Header />
            </Fragment>
        );
    }
}

export default Index;