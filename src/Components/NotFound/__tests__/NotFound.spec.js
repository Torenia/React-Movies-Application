import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';

import NotFound from '../NotFound'

describe('NotFound', () => {
    it('should render "NotFound" page', () => {
        const { getByText } = render(<Router><NotFound/></Router>);
        expect(getByText('Page not found')).toBeInTheDocument();
    })
})
