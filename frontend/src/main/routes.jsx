import React from "react";
import {Router, Route, Redirect, hashHistory} from 'react-router'

import DashboardSemRedux from '../dashboardSemRedux/dashboardSemRedux'
import BillingCycle from '../billingCycle/billingCycle'

export default props => {
    return(
        <Router history={hashHistory}>
            <Route path='/' component={DashboardSemRedux}></Route>
            <Route path='/billingCycles' component={BillingCycle}></Route>
            <Redirect from='*' to='/'></Redirect>
        </Router>
    )
}