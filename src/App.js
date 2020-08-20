import React, { useState } from 'react';
import './index.scss';

import Header from './Containers/Header/Header';
import MovieSearch from './Containers/MovieSearch/MovieSearch';
import MoviesList from './Containers/MoviesList/MoviesList';
import Footer from './Containers/Footer/Footer';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

export default function App() {
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <Header />
            <MovieSearch searchText={setSearchText}/>
            <ErrorBoundary>
                <MoviesList searchText={searchText}/>
            </ErrorBoundary>
            <Footer />
        </>
    );
}
