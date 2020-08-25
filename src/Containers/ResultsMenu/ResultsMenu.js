import React from 'react';

import { ResultsMenuWrapper } from '../../Components/ResultsMenuWrapper/ResultsMenuWrapper';
import ResultsFilter from '../../Components/ResultsFilter/ResultsFilter';
import ResultsSort from '../../Components/ResultsSort/ResultsSort';

export default function ResultsMenu() {
    return (
        <ResultsMenuWrapper>
            <ResultsFilter/>
            <ResultsSort/>
        </ResultsMenuWrapper>
    )
};

