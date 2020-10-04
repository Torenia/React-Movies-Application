import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';

import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import HomePage from './HomePage';

export default function App() {

    return (
        <>
            <Header/>
            <Router>
                <Switch>
                    <Route path="/" component={ HomePage }/>
                    <Route exact path="*" component={ NotFound }/>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
}
