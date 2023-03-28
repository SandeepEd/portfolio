import React from 'react'

class ErrorBoundary extends React.Component<
    { children: JSX.Element },
    { hasError: boolean, error: Error | null }> {

    constructor(props: { children: JSX.Element }) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true, error }
    }

    render() {
        const { children } = this.props;
        const { hasError, error } = this.state;
        if (hasError) {
            return <h1>Something went wrong: {error?.message}</h1>
        }
        return children;
    }
}

export default ErrorBoundary