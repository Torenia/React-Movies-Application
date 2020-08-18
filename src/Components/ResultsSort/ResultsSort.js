import React from 'react';

import { ResultsSortWrapper } from '../ResultsSortWrapper/ResultsSortWrapper';

export default function ResultsSort() {

    return (
        <ResultsSortWrapper>
            <div>Sort by</div>
            <select>
                <option>Release Date</option>
                <option>Rating</option>
                <option>Genre</option>
            </select>
        </ResultsSortWrapper>
    )
};

