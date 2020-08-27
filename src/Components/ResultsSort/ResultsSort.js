import React from 'react';
import PropTypes from 'prop-types';

import { ResultsSortWrapper } from '../ResultsSortWrapper/ResultsSortWrapper';

export default function ResultsSort({ sortBy }) {
    return (
        <ResultsSortWrapper>
            <div>Sort by</div>
            <select onChange={e => sortBy(e.target.value)}>
                <option value="release_date">Release Date</option>
                <option value="vote_count">Rating</option>
            </select>
        </ResultsSortWrapper>
    )
};

ResultsSort.protoTypes ={
    sortBy: PropTypes.string
}
