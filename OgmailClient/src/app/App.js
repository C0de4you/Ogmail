import React from "react";
import RootRouter from './rootRouter'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './reduxStore';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RootRouter />
            </BrowserRouter>
        </Provider>
    )
}

export default App;