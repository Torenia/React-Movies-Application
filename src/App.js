import React, { useState } from 'react';
import './index.scss';

import Header from './Containers/Header/Header';
import MovieSearch from './Containers/MovieSearch/MovieSearch';
import MoviesList from './Containers/MoviesList/MoviesList';
import Footer from './Containers/Footer/Footer';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import { Context } from './Components/Context/Context';

export default function App() {
    const [searchText, setSearchText] = useState('');

    return (
        <Context.Provider value={{ searchText, setSearchText }}>
            <Header/>
            <MovieSearch/>
            <ErrorBoundary>
                <MoviesList/>
            </ErrorBoundary>
            <Footer/>
        </Context.Provider>
    );
}
