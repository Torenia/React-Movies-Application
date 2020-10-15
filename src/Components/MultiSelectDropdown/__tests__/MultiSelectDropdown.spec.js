import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';

import MultiSelectDropdown from '../MultiSelectDropdown'

describe('MultiSelectDropdown', () => {
    it('should render multi select dropdown', () => {
        const { getByText } = render(<Router><MultiSelectDropdown/></Router>);
        expect(getByText('Genre')).toBeInTheDocument();
    })
})
