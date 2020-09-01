import React, {useContext} from 'react';

import { ResultsFilterWrapper } from '../ResultsFilterWrapper/ResultsFilterWrapper';
import { Context } from '../Context/Context';

const genres = ['All', 'Adventure', 'Drama', 'Family', 'Music', 'Animation'];

export default function ResultsFilter() {
    const { setFilterBy} = useContext(Context);

    return (
        <ResultsFilterWrapper>
            {genres.map(genre => (
                <li key={genre} data-genre={genre} onClick={e => setFilterBy(e.currentTarget.dataset.genre)}>{genre}</li>
            ))}
        </ResultsFilterWrapper>
    )
};

