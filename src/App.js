import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route component={HomePage} exact path="/"/>
                <Route component={ShopPage} path="/shop"/>
                <Route component={SignInAndSignUpPage} path="/signin"/>
            </Switch>
        </div>
    );
}

export default App;
