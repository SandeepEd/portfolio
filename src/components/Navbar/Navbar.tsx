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
            className='nav_item'
            to={`${path}`}>
            {name}
        </Link>
    )
}

const Navbar = () => {
    return (
        <nav
            className='nav_bar'
        >
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