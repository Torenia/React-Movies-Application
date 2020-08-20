import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ResultCount from '../../Components/ResultCount/ResultCount';
import  MoviesResults from '../MoviesResults/MoviesResults';
import  ResultsMenu from '../ResultsMenu/ResultsMenu';
import { MoviesListWrapper } from '../../Components/MoviesWrapper/MoviesWrapper';
import { Wrapper } from '../../Components/Wrapper/Wrapper';

export default function MoviesList({ searchText }) {
    const [resultCount, setResultCount] = useState(0);

    return (
        <Wrapper>
            <MoviesListWrapper>
                <ResultsMenu/>
                {resultCount >0 &&
                    <ResultCount
                        resultCount={resultCount}
                    />}
                <MoviesResults
                    searchText={searchText}
                    resultCount={setResultCount}
                />
            </MoviesListWrapper>
        </Wrapper>
    )
};

MoviesList.protoTypes ={
    searchText: PropTypes.string
}




