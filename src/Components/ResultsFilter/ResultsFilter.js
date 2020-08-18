import React from 'react';

import { ResultsFilterWrapper } from '../ResultsFilterWrapper/ResultsFilterWrapper';

export default function ResultsFilter() {
    const genres = ['All', 'Adventure', 'Drama', 'Biography', 'Music'];

    return (
        <ResultsFilterWrapper>
            {genres.map(genre => (
                <li key={genre}>{genre}</li>
            ))}
        </ResultsFilterWrapper>
    )
};

