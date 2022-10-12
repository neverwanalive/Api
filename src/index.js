import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import  store  from './redux/store'

import { App } from './componetns/App/App';
import { Placeholder } from './componetns/Placeholder/Placeholder';
import { Localization } from './componetns/Localization/Localization'; 
import { User } from './componetns/User/User'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="users" element={<Placeholder/>}/>
                    <Route path="users/:userId" element={<User/>}/>
                    <Route path="localization" element={<Localization/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);