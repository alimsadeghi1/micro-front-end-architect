// * Import React
import React from 'react';
import ReactDOM from 'react-dom';

// * Router DOM
import { createMemoryHistory } from 'history';

function mfeChildRouteHandler({ element, onNavigate, initialPathname, defaultHistory, Component, ...restProps }) {

    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPathname]
    });


    if (onNavigate) history.listen(onNavigate);

    // Render whole application
    // in the element is passed
    ReactDOM.render(<Component {...restProps} history={ history } />, element);


    // * "onParentNavigate" description ====================
    //   "onParentNavigate" will work when
    //   the parent route pages change .
    //   Example: like when from '/home' goes to '/about'
    //   thats when it works and will applies to
    //   this (child) same route .
    // =====================================================

    const onParentNavigate = ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (nextPathname !== pathname) history.push(nextPathname);
    }

    return {
        onParentNavigate
    }
}

export default mfeChildRouteHandler;