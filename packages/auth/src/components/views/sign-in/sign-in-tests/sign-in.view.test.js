// * Import React
import React from 'react';
import ReactDOM from 'react-dom';

// * Import Components
import SignIn from '../sign-in.view';

// * Import Testing stuff
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

// * Import Router DOM
import { BrowserRouter } from 'react-router-dom';


describe('"SignIn" component', () => {

    // * Unmounts React trees that were mounted with render.
    afterEach(cleanup);

    it('Render without crashing', () => {
        const container = document.createElement('div');
        ReactDOM.render(<BrowserRouter><SignIn /></BrowserRouter>, container);
    });

    it('Render correctly', () => {
        const { baseElement } = render(<BrowserRouter><SignIn /></BrowserRouter>);
        
        expect(baseElement).toHaveTextContent('Email address');
        expect(baseElement).toHaveTextContent('Password');
        expect(baseElement).toHaveTextContent('Submit');
        expect(baseElement).toHaveTextContent('SIGN IN or SIGN UP');
    });

});