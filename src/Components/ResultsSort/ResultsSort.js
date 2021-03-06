import React, { useContext } from 'react';

import { ResultsSortWrapper } from '../ResultsSortWrapper/ResultsSortWrapper';
import { Context } from '../Context/Context';

export default function ResultsSort() {
    const { setSortBy} = useContext(Context);

    return (
        <ResultsSortWrapper>
            <div>Sort by</div>
            <select onChange={e => setSortBy(e.target.value)} data-testid="select">
                <option value="release_date" data-testid="release-date">Release Date</option>
                <option value="vote_count">Rating</option>
            </select>
        </ResultsSortWrapper>
    )
};
