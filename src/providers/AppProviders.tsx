import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary'

type RouterProviderProps = {
    children: ReactNode
}

const RoutesProvider: React.FC<RouterProviderProps> = ({ children }) =>
    <React.StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>

export default RoutesProvider