import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

type RouterProviderProps = {
    children: ReactNode
}

const RoutesProvider: React.FC<RouterProviderProps> = ({ children }) =>
    <React.StrictMode>
        <BrowserRouter>
            {children}
        </BrowserRouter>
    </React.StrictMode>

export default RoutesProvider