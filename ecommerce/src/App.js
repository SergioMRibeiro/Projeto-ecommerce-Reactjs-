import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/global';
// import api from './services/api.js';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes />
            </BrowserRouter> 
            <GlobalStyles />


        </>
    );
}

export default App;


// yarn create react-app ecommerce
// yarn add react-router-dom
// yarn add styled-components
// yarn add axios
// yarn start

