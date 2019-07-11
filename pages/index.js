import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'I am Index Page'
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    updateTitle = () => {
        this.setState({
            title: 'I am Updated Index Page'
        });
    }

    render() {
        const {
            title
        } = this.state;
        console.log('render');
        return (
            <BaseLayout>
                <h1 className='fromPage'> I am Index Page from Class Component </h1>
                <h2> { title } </h2>
                <button onClick={this.updateTitle}> Change Title </button>
            </BaseLayout>
        );
    }
}

export default Index;