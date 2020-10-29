import React, { useCallback, useContext } from 'react';

import { ResultsSortWrapper } from '../ResultsSortWrapper/ResultsSortWrapper';
import { Context } from '../Context/Context';

export default function ResultsSort() {
    const { setSortBy} = useContext(Context);

    const handleClick = useCallback((e) => {
        setSortBy(e.target.value);
    }, []);

    return (
        <ResultsSortWrapper>
            <div>Sort by</div>
            <select onChange={handleClick} data-testid="select">
                <option value="release_date" data-testid="release-date">Release Date</option>
                <option value="vote_count">Rating</option>
            </select>
        </ResultsSortWrapper>
    )
};
