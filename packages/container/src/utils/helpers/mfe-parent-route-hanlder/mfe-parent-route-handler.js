// * Import React
import React, { useEffect, useRef } from 'react';

// * Import Router DOM stuff
import { useHistory } from 'react-router-dom';

function useMFEParentRouteHandler(mountFunction, otherArgs) {
    const authRef = useRef(null);
    const history = useHistory();

    useEffect(() => {

        // * "onNavigate" description ==========================
        // *
        //   "onNavigate" will work when
        //   the "mountFunction" route pages change .
        //   Example: like when from '/home' goes to '/about'
        //   thats when "onNavigate" works and will applies to
        //   parent (container) same route .
        // *
        // =====================================================

        const onNavigate = ({ pathname: nextPathname }) => {
            const { pathname } = history.location;
            if (nextPathname !== pathname) history.push(nextPathname);
        };

        // * "onParentNavigate" description ===================
        // *
        //   "onParentNavigate" will work when the
        //   "onNavigate" (child) route pages change .
        //   Example: like when from '/home' goes to '/about'
        //   thats when "onParentNavigate" works and 
        //   will applies to parent (container) same route .
        // *
        // ====================================================

        const { onParentNavigate } = mountFunction({
            element: authRef.current,
            onNavigate,

            // * "initialPathname" ============================
            // *
            //   "initialPathname" is An array of locations
            //    in the history stack.
            // *
            // ================================================
            initialPathname: history.location.pathname,
            ...otherArgs
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ authRef }></div>;
}

export default useMFEParentRouteHandler;