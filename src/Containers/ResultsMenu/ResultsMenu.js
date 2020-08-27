import React from 'react';
import PropTypes from 'prop-types';

import { ResultsMenuWrapper } from '../../Components/ResultsMenuWrapper/ResultsMenuWrapper';
import ResultsFilter from '../../Components/ResultsFilter/ResultsFilter';
import ResultsSort from '../../Components/ResultsSort/ResultsSort';

export default function ResultsMenu( { sortBy, filterBy }) {
    return (
        <ResultsMenuWrapper>
            <ResultsFilter filterBy={filterBy}/>
            <ResultsSort sortBy={sortBy}/>
        </ResultsMenuWrapper>
    )
};

ResultsMenu.protoTypes ={
    sortBy: PropTypes.string,
    filterBy: PropTypes.string
}

