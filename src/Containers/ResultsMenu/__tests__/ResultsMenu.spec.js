import React from 'react'
import { render } from '@testing-library/react';

import ResultsMenu from '../ResultsMenu'

describe('ResultsMenu', () => {
    it('should render "Sort by" options', () => {
        const {getByText} = render(<ResultsMenu/>);
        expect(getByText('Release Date')).toBeInTheDocument();
    })
    it('should render "Filter" options', () => {
        const {getByText} = render(<ResultsMenu/>);
        expect(getByText('Adventure')).toBeInTheDocument();
    })
})
