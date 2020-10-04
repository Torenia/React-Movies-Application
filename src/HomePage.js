import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MovieSearch from './Containers/MovieSearch/MovieSearch';
import MoviesList from './Containers/MoviesList/MoviesList';
import MovieDetails from './Containers/MovieDetails/MovieDetails';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import { Context } from './Components/Context/Context';
import AddMovieModal from './Components/AddMovieModal/AddMovieModal';
import EditMovieModal from './Components/EditMovieModal/EditMovieModal';
import DeleteMovieModal from './Components/DeleteMovieModal/DeleteMovieModal';

export default function HomePage() {
    const [searchText, setSearchText] = useState('');

    return (
        <Context.Provider value={{ searchText, setSearchText }}>
            <Router>
                <Switch>
                    <Route exact path="/movie/:id" component={ MovieDetails }/>
                    <Route path="/" component={ MovieSearch }/>
                </Switch>
                <Switch>
                    <Route exact path="/edit/movie/:id" component={ EditMovieModal }/>
                    <Route exact path="/add/movie" component={ AddMovieModal }/>
                    <Route path="/delete/movie/:id" component={ DeleteMovieModal }/>
                </Switch>
                <ErrorBoundary>
                    <MoviesList/>
                </ErrorBoundary>
            </Router>
        </Context.Provider>
    );
}
