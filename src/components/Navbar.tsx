import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = ({}) => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Agents</Link>
                </li>
                <li>
                    <Link to="/maps">Maps</Link>
                </li>
                <li>
                    <Link to="/weapons">Weapons</Link>
                </li>
                <li>
                    <Link to="/bundles">Bundles</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar