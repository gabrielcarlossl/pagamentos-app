import React from "react";
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import App from "./app";
import DashboardSemRedux from '../dashboardSemRedux/dashboardSemRedux'
import BillingCycle from '../billingCycle/billingCycle'

export default props => {
    return(
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={DashboardSemRedux}></IndexRoute>
                <Route path='billingCycles' component={BillingCycle}></Route>
            </Route>
            
            <Redirect from='*' to='/'></Redirect>
        </Router>
    )
}