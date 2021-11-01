// * Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Import Testing stuff
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

// * Import Router DOM
import { BrowserRouter } from 'react-router-dom';

// * Import Components
import SignUp from '../sign-up.view';

describe('"SignUp" component', () => {

    afterEach(cleanup);

    it('Render without crashing', () => {
        const container = document.createElement('div');
        ReactDOM.render(<BrowserRouter><SignUp /></BrowserRouter>, container);
    });

    it('Render correctly', () => {
        const { baseElement } = render(<BrowserRouter><SignUp /></BrowserRouter>);
        
        expect(baseElement).toHaveTextContent('Email address');
        expect(baseElement).toHaveTextContent('We\'ll never share your email with anyone else.');
        expect(baseElement).toHaveTextContent('Password');
        expect(baseElement).toHaveTextContent('Repeat Password');
        expect(baseElement).toHaveTextContent('SIGN UP or SIGN IN');
        expect(baseElement).toHaveTextContent('Submit');
    });

});