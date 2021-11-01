// * Import Components
import App from '@/components/App/app';

// * Import Target for Test
import mfeChildRouteHandler from '../mfe-child-route-handler';

describe('"mfeChildRouteHandler" helper', () => {

    it('Work without crashing', () => {
        mfeChildRouteHandler({
            element: document.createElement('div'),
            Component: App,
            initialPathname: '/'
        });
    });

});