import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Delivery from './Delivery';
import Payment from './Payment';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Delivery} />
            <Route path="/payment" component={Payment} />
        </BrowserRouter>
    )
}

export default Router
