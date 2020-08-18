import React from 'react';
import './index.scss';

import Header from './Containers/Header/Header';
import MovieSearch from './Containers/MovieSearch/MovieSearch';
import MoviesList from './Containers/MoviesList/MoviesList';
import Footer from './Containers/Footer/Footer';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';


export default function App() {
    return (
        <>
            <Header />
            <MovieSearch />
            <ErrorBoundary>
                <MoviesList />
            </ErrorBoundary>
            <Footer />
        </>
    );
}
