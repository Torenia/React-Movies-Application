import React from 'react'
import { render } from '@testing-library/react';

import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary', () => {
    it(`shows the fallback when there's an error`, () => {
        const Throws = () => {
            throw new Error('Oops, something went wrong... We are doing our best to fix the issue')
        }
        const fallback = error => (
            <span>
        Error: {error.message}
      </span>
        )
        const { getByText, unmount } = render(
            <ErrorBoundary fallback={fallback}>
                <Throws />
            </ErrorBoundary>
        )
        getByText('Oops, something went wrong... We are doing our best to fix the issue')
        unmount()
    })
})
