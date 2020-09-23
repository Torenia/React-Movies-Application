import React, { useContext, useState } from 'react';

import ResultCount from '../../Components/ResultCount/ResultCount';
import  MoviesResults from '../MoviesResults/MoviesResults';
import  ResultsMenu from '../ResultsMenu/ResultsMenu';
import { MoviesListWrapper } from '../../Components/MoviesWrapper/MoviesWrapper';
import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { Context } from '../../Components/Context/Context';
import { useMoviesData } from '../../Hooks/useMoviesData';

export default function MoviesList() {
    const [sortBy,setSortBy] = useState('release_date');
    const [filterBy,setFilterBy] = useState('All');
    const searchText = useContext(Context).searchText;
    const [state] = useMoviesData();

    return (
        <Context.Provider value={{ sortBy, setSortBy, filterBy, setFilterBy }}>
            <Wrapper>
                <MoviesListWrapper>
                    <ResultsMenu/>
                    {state.totalAmount > 0 && <ResultCount/>}
                    <MoviesResults searchText={searchText}/>
                </MoviesListWrapper>
            </Wrapper>
        </Context.Provider>
    )
};





