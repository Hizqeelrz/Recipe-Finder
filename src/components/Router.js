import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from '../App'

import Recipe from './Recipe';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/> {/* for exact match */}
            <Route path="/recipe/:id" component={Recipe} exact/>
        </Switch>
    </BrowserRouter>
);

export default Router;