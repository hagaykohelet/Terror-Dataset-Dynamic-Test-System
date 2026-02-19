import React from 'react'
import '../style/Navbar.css'
function NavBar({text}) {
    return (
        <div className='navbar'>
            <h1>Terrorist Data {text}</h1>
        </div>
    )
}

export default NavBar