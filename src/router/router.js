import React from 'react';
// import {HashRouter, Route, Switch,hashHistory} from 'react-router-dom'
import {HashRouter, Route, Switch} from 'react-router-dom';
import home from '../components/home/index';
import table from '../components/table/index';
import tests from '../components/test/index';
import redux_test from '../components/redux_test/index';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={table}/>
            <Route exact path="/home" component={home}/>
            <Route exact path="/tests" component={tests}/>
            <Route exact path="/redux_test" component={redux_test}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;