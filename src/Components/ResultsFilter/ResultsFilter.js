import React, { useCallback, useContext } from 'react';

import { ResultsFilterWrapper } from '../ResultsFilterWrapper/ResultsFilterWrapper';
import { Context } from '../Context/Context';

const genres = ['All', 'Adventure', 'Drama', 'Family', 'Music', 'Animation'];

export default function ResultsFilter() {
    const { setFilterBy} = useContext(Context);

    const handleClick = useCallback((e) => {
        setFilterBy(e.currentTarget.dataset.genre);
    }, []);

    return (
        <ResultsFilterWrapper>
            {genres.map(genre => (
                <li key={genre} data-genre={genre} onClick={handleClick}>{genre}</li>
            ))}
        </ResultsFilterWrapper>
    )
};

