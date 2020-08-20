import React from 'react';
import PropTypes from 'prop-types';

import { ResultCountNumber, ResultCountText } from '../ResultCountWrapper/ResultCountWrapper';

export default function ResultCount({ resultCount }) {
    return (
        <>
            <ResultCountNumber>{resultCount}</ResultCountNumber>
            <ResultCountText>&nbsp;movies found</ResultCountText>
        </>
    )
};

ResultCount.protoTypes ={
    resultCount: PropTypes.number.isRequired
}

