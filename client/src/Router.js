import React from "react";
import Navbar from "./components/misc/Navbar";

import {BrowserRouter} from 'react-router-dom';

const Router = () => {
    return <BrowserRouter>
        <Navbar />
    </BrowserRouter>
};

export default Router;