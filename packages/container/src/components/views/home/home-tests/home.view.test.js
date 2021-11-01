// * Import React
import React from 'react';
import ReactDOM from 'react-dom';

// * Import Components
import Home from '../home.view';

// * Import Testing libs
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

describe('"Home" component', () => {

    afterEach(cleanup);

    it('Render without crashing', () => {
        const container = document.createElement('div');
        ReactDOM.render(<Home />, container);
    });

    it('Render correctly', () => {
        const { baseElement } = render(<Home />);

        expect(baseElement).toHaveTextContent('Welcome to Micro Front End Architecture');
    });

});