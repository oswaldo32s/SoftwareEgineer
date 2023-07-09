import React from 'react'
import {Link} from 'wouter'

function Header() {

    return (
        <header>
            <div className='logo'>
            <h1>MLP</h1>
            </div>
            <nav>
                <ul>
                    <li className='nav-button'><Link to='/'>Home</Link></li>
                    <li className='nav-button'><Link to='/gif/popular'>Courses</Link></li>
                    <li className='nav-button'>About Me</li>
                    <li className='nav-button'>Contact Me</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;