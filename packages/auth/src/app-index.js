// * Import Components
import App from './components/App/app';

// * Router DOM
import { createBrowserHistory } from 'history';

// * Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// * Import Tools
import mfeChildRouteHandler from '@/utils/helpers/mfe-child-route-handler/mfe-child-route-handler';

function mount(props) {

    // * "mfeChildRouteHandler" description =======================
    //
    //   This will handle routing setting .
    //   This can gives 2 argument .
    //   1 - The props that come from parent !! (necessary) !!
    //   2 - The component that you want to render  !! (necessary) !!.
    //
    // ================================================================

    const mounter = mfeChildRouteHandler({ ...props, Component: App });
    return mounter;
}

if (process.env.NODE_ENV === 'development') {
    const rootElement = document.querySelector('#root-auth');
    if (rootElement) mount({ element: rootElement, defaultHistory: createBrowserHistory() });
}

export { mount };