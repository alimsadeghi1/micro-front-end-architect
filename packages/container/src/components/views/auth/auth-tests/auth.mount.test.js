// * Import React
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

// * Import Components
const Auth = lazy(() => import('../auth.mount'));


describe('"Auth" component mounting', () => {

    it('Render without crashing', () => {
        const container = document.createElement('div');
        ReactDOM.render(
            <Suspense fallback={ <h1>Loading</h1> }>
                <Auth />
            </Suspense>
            , container
        );
    });

});