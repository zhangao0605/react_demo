import React from 'react';
// import {HashRouter, Route, Switch,hashHistory} from 'react-router-dom'
import {HashRouter, Route , Switch} from 'react-router-dom';
import home from '../components/home/index';
import table from '../components/table/index';


const BasicRoute = () => (
    <HashRouter >
        <Switch>
            <Route exact path="/" component={table}/>
            <Route exact path="/home" component={home}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;