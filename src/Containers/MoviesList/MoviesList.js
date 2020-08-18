import React from 'react';

import ResultCount from '../../Components/ResultCount/ResultCount';
import  MoviesResults from '../MoviesResults/MoviesResults';
import  ResultsMenu from '../ResultsMenu/ResultsMenu';
import  EmptyResultState from '../../Components/EmptyResultState/EmptyResultState';
import { MoviesListWrapper } from '../../Components/MoviesWrapper/MoviesWrapper';
import { Wrapper } from '../../Components/Wrapper/Wrapper';

export default function MoviesList() {
    const moviesNumberResult = 6;
    return (
        <Wrapper>
            <MoviesListWrapper>
                <ResultsMenu/>
                {moviesNumberResult > 0
                    ? <>
                        <ResultCount
                            resultCount={moviesNumberResult}
                            resultText=" movies found"
                        />
                        <MoviesResults/>
                    </>
                    : <EmptyResultState/>}
            </MoviesListWrapper>
        </Wrapper>
    )
};



