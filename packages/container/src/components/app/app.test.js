// * Import React
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

// * Import Components
import App from './app';

describe('"App" component', () => {

    it('Render without crashing', () => {
        const container = document.createElement('div');
        ReactDOM.render(
            <Suspense fallback={ <h1>Loading...</h1> }>
                <App />
            </Suspense>
            , container
        );
    });

});