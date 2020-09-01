import React, { useContext, useState } from 'react';

import ResultCount from '../../Components/ResultCount/ResultCount';
import  MoviesResults from '../MoviesResults/MoviesResults';
import  ResultsMenu from '../ResultsMenu/ResultsMenu';
import { MoviesListWrapper } from '../../Components/MoviesWrapper/MoviesWrapper';
import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { Context } from '../../Components/Context/Context';

export default function MoviesList() {
    const [resultCount, setResultCount] = useState(0);
    const [sortBy,setSortBy] = useState('release_date');
    const [filterBy,setFilterBy] = useState('All');
    const searchText = useContext(Context).searchText;

    return (
        <Context.Provider value={{ sortBy, setSortBy, filterBy, setFilterBy }}>
            <Wrapper>
                <MoviesListWrapper>
                    <ResultsMenu/>
                    {resultCount > 0 &&
                    <ResultCount
                        resultCount={resultCount}
                    />}
                    <MoviesResults
                        searchText={searchText}
                        resultCount={setResultCount}
                    />
                </MoviesListWrapper>
            </Wrapper>
        </Context.Provider>
    )
};





