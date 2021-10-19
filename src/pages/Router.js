import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Delivery from './Delivery';
import Payment from './Payment';
import Finish from './Finish';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Delivery} />
            <Route path="/payment" component={Payment} />
            <Route path="/finish" component={Finish} />
        </BrowserRouter>
    )
}

export default Router
