// React stuff
import React from 'react';

// Router DOM
import { Router, Route, Switch } from 'react-router-dom';

// Components
import SignUp from '@components/views/sign-up/sign-up.view';
import SignIn from '@components/views/sign-in/sign-in.view';

function App({ history, signIn }) {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/auth/sign-up'>
                    <SignUp signIn={signIn} />
                </Route>
                <Route exact path='/auth/sign-in'>
                    <SignIn signIn={signIn} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
