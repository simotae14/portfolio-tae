import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Callback extends React.Component {
    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h1>
                        Verifying login data ...
                    </h1>                
                </BasePage>
            </BaseLayout>
        );
    }
}

export default Callback;