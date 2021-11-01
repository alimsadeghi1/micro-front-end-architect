// * Import React
import React from 'react';
import ReactDOM from 'react-dom';

// * Import Testing stuff
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

// * Import Components
import Header from '../header.component';

// * Import Router DOM
import { BrowserRouter as Router } from 'react-router-dom';

// * Import Redux stuff
import { Provider } from 'react-redux';
import { store } from '@/redux/store';


describe('"Header" component', () => {

    afterEach(cleanup);

    it('Render without crashing', () => {
        const container = document.createElement('div');
        ReactDOM.render(
            <Provider store={ store }>
                <Router>
                    <Header authStatus={ true } />
                </Router>
            </Provider>
            , container);
    });

    it('Render correctly', () => {
        const { baseElement } = render(
            <Provider store={ store }>
                <Router>
                    <Header authStatus={ true } />
                </Router>
            </Provider>
        );

        expect(baseElement).toHaveTextContent('MFE');
        expect(baseElement).toHaveTextContent('Home');
    });

});