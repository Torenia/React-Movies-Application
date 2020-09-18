import React from 'react';
import { useSelector } from 'react-redux';

import { ResultCountNumber, ResultCountText } from '../ResultCountWrapper/ResultCountWrapper';

export default function ResultCount() {
    const totalAmount = useSelector(store => store.totalAmount);

    return (
        <>
            <ResultCountNumber>{totalAmount}</ResultCountNumber>
            <ResultCountText>&nbsp;movies found</ResultCountText>
        </>
    )
};
