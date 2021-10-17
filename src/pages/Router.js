import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Delivery from './Delivery';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Delivery} />
        </BrowserRouter>
    )
}

export default Router
