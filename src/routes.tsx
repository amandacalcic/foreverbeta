import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Feed from './pages/Feed';
import Register from './pages/Register';
import PrivacyTerm from './pages/PrivacyTerm';
import References from './pages/References';
import End from './pages/End';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/feed" component={Feed} />
            <Route path="/register" component={Register} />
            <Route path="/term" component={PrivacyTerm} />
            <Route path="/references" component={References} />
            <Route path="/end" component={End} />
        </BrowserRouter>
    );
}

export default Routes;