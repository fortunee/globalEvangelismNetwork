import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Greetings} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
    </Route>
);
