import React from 'react';
import { Link } from 'react-router-dom';

import { NotFoundWrapper } from '../NotFoundWrapper/NotFoundWrapper';
import { ResetButton } from '../Button/Button';

export default function NotFound() {

    return (
        <NotFoundWrapper>
            <h1>Page not found</h1>
            <div>404</div>
            <div>
                <Link to={'/'}>
                    <ResetButton>Go back to home</ResetButton>
                </Link>
                </div>
        </NotFoundWrapper>
    )
};

