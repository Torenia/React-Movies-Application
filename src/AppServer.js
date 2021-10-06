import React, { useState } from 'react';
import { Route, Switch, StaticRouter as Router } from 'react-router-dom';
import './index.scss';
import { hot } from 'react-hot-loader';

import MovieSearch from './Containers/MovieSearch/MovieSearch';
import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';
import MoviesList from './Containers/MoviesList/MoviesList';
import MovieDetails from './Containers/MovieDetails/MovieDetails';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import { Context } from './Components/Context/Context';
import AddMovieModal from './Components/AddMovieModal/AddMovieModal';
import EditMovieModal from './Components/EditMovieModal/EditMovieModal';
import DeleteMovieModal from './Components/DeleteMovieModal/DeleteMovieModal';
import NotFound from './Components/NotFound/NotFound';

function AppServer() {
    const [searchText, setSearchText] = useState('');

    return (
        <Context.Provider value={{ searchText, setSearchText }}>
            <Router>
                <ErrorBoundary>
                    <Header/>
                    <Switch>
                        <Route exact path="/movie/:id" component={ MovieDetails }/>
                        <Route exact path={['/', '/movies/']} component={ MovieSearch }/>
                        <Route exact path="/edit/movie/:id" component={ EditMovieModal }/>
                        <Route exact path="/add/movie" component={ AddMovieModal }/>
                        <Route path="/delete/movie/:id" component={ DeleteMovieModal }/>
                        <Route path="*" component={ NotFound }/>
                    </Switch>
                    <Route strict exact path={['/', '/movies/', '/edit/movie/:id', '/add/movie',
                        '/delete/movie/:id']} component={ MoviesList }/>
                    <Footer/>
                </ErrorBoundary>
            </Router>
        </Context.Provider>
    );
}

export default hot(module)(AppServer);
