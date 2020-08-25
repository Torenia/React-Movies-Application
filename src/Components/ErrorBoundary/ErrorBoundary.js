import React, { Component } from 'react';

import { ErrorBoundaryWrapper } from '../Wrapper/Wrapper';

export default class ErrorBoundary extends Component {
    state = { error: null, errorInfo: null };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <ErrorBoundaryWrapper>
                    <h2>Oops, something went wrong... We are doing our best to fix the issue</h2>
                </ErrorBoundaryWrapper>
            )
        }
        return this.props.children;
    }
}

