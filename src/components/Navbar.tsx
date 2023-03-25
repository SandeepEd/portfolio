import React from 'react'
import { Link } from 'react-router-dom'

const navBarItems = [
    {
        name: 'Home',
        path: '/home',
    },
    {
        name: 'Projects',
        path: '/projects',
    },
    {
        name: 'About',
        path: '/about',
    },
]

const NavItem = ({ name, path }: { name: string, path: string }) => {
    return (
        <Link
            className='rounded-lg px-5 py-3 font-medium hover:bg-slate-100 hover:text-slate-900 float-right transition-colors duration-300 ease-in'
            to={`${path}`}>
            {name}
        </Link>
    )
}

const Navbar = () => {
    return (
        <nav className='bg-gray-800 py-2 text-white flex flex-row justify-center'>
            {
                navBarItems.map((item, i) => {
                    return (
                        <>
                            <NavItem key={i} name={item.name} path={item.path} />
                        </>
                    )
                })
            }
        </nav>
    )
}

export default Navbar