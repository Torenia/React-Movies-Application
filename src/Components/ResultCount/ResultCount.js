import React from 'react';
import PropTypes from 'prop-types';

import { ResultCountNumber, ResultCountText } from '../ResultCountWrapper/ResultCountWrapper';

export default function ResultCount(props) {
    return (
        <>
            <ResultCountNumber>{props.resultCount}</ResultCountNumber>
            <ResultCountText>{props.resultText}</ResultCountText>
        </>
    )
};

ResultCount.protoTypes ={
    resultCount: PropTypes.number.isRequired,
    resultText: PropTypes.string.isRequired
}

