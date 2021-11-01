// * Import React
import React from 'react';
import ReactDOM from 'react-dom';

// * Import Testing stuff
import '@testing-library/jest-dom/extend-expect';

// * Import Components
import App from '../app';

// * Import Router DOM
import { createMemoryHistory, createBrowserHistory } from 'history';



const history = createMemoryHistory();

if (process.env.NODE_ENV === 'development') {
    history = createBrowserHistory();
}

describe('"App component"', () => {

    it('Render without crashing', () => {
        const container = document.createElement('div');
        ReactDOM.render(<App history={ history } />, container);
    });

});