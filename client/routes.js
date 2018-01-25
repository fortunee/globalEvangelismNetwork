import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import QuestionList from './components/questions/QuestionList';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Greetings} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
        <Route path="questions" component={QuestionList} />
    </Route>
);
