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

const localStorageCurrentData = localStorage.getItem('test');


// * Local Storage Checker 
console.log(
    `%c These are the localStorage data that I found ===> ${ localStorageCurrentData || 'I found nothing ... 🙄' }`,
    'background-color: red; color: #fff; font-size: 1.5rem; padding: 4px; border-radius: 8px',
);

export { mount };