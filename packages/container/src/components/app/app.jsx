// * Import React
import React, { lazy, Suspense } from 'react';

// * Import Router DOM
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// * Import Components
const Auth = lazy(() => import('@components/views/auth/auth.view'));
const ContactUs = lazy(() => import('@components/views/contact-us/contact-us.view'));
const Dashboard = lazy(() => import('@components/views/dashboard/dashboard.view'));

import Header from '@components/sections/header/header.component';
import Home from '@components/views/home/home.view';


// * Import Redux stuff
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import Loading from '@components/sections/loading/loading.component';

function App() {

    return (
        <Provider store={store}>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <Header />
                    
                    <Switch>
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/auth' component={Auth} />
                        <Route path='/contact-us' component={ContactUs} />
                        <Route path='/' component={Home} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </Provider>
    );
}

export default App;
