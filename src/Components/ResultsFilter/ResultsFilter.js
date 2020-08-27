import React from 'react';
import PropTypes from 'prop-types';

import { ResultsFilterWrapper } from '../ResultsFilterWrapper/ResultsFilterWrapper';

export default function ResultsFilter({ filterBy }) {
    const genres = ['All', 'Adventure', 'Drama', 'Family', 'Music', 'Animation'];

    return (
        <ResultsFilterWrapper>
            {genres.map(genre => (
                <li key={genre} data-genre={genre} onClick={e => filterBy(e.currentTarget.dataset.genre)}>{genre}</li>
            ))}
        </ResultsFilterWrapper>
    )
};

ResultsFilter.protoTypes ={
    filterBy: PropTypes.string
}
