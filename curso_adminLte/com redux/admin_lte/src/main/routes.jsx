import React from 'react'

import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Todo from '../components/todo'
import About from '../components/about'

export default props => (

    <Router>
         <Switch>
        <Route path="/about" component={About} />
        <Route path="/todos" component={Todo} /> 
        <Redirect from='*' to='/todos' /> 
        </Switch>
     </Router>
)