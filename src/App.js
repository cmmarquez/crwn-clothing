import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route component={HomePage} exact path="/"/>
                <Route component={ShopPage} path="/shop"/>
            </Switch>
        </div>
    );
}

export default App;
