import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ResultCount from '../../Components/ResultCount/ResultCount';
import  MoviesResults from '../MoviesResults/MoviesResults';
import  ResultsMenu from '../ResultsMenu/ResultsMenu';
import { MoviesListWrapper } from '../../Components/MoviesWrapper/MoviesWrapper';
import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { Context } from '../../Components/Context/Context';

export default function MoviesList() {
    const [sortBy,setSortBy] = useState('release_date');
    const [filterBy,setFilterBy] = useState('All');
    const searchText = useContext(Context).searchText;
    const location = useLocation().search;

    return (
        <Context.Provider value={{ sortBy, setSortBy, filterBy, setFilterBy }}>
            <Wrapper>
                <MoviesListWrapper>
                    {location && <ResultsMenu/>}
                    {location && <ResultCount/>}
                    <MoviesResults searchText={searchText}/>
                </MoviesListWrapper>
            </Wrapper>
        </Context.Provider>
    )
};





