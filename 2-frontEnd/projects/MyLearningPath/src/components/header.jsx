import React from 'react'

function Header() {
    function handleClick() {
        alert('Hold on, Site on Construction')
    }

    return (
        <header>
            <div className='logo'>
            <h1>MLP</h1>
            </div>
            <nav>
                <ul>
                    <li className='nav-button' onClick={handleClick}>Home</li>
                    <li className='nav-button' onClick={handleClick}>Courses</li>
                    <li className='nav-button' onClick={handleClick}>About Me</li>
                    <li className='nav-button' onClick={handleClick}>Contact Me</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;