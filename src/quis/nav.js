import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import logo from './public/img/logo.png'
import './public/css/style.css'
import { LoginContext } from './loginContext'

const Nav = () => {
    const [logincek] = useContext(LoginContext)
    
    return (
        <header>
            <img src={logo} alt={"logo"} width="200px" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>{console.log(logincek)}
                    {logincek === 'login' && (<li>
                        <Link to="/movie-list-editor">Movir List Editor</Link>
                    </li>)}
                    {logincek !== 'login' && (<li>
                        <Link to="/login">LogIn</Link>
                    </li>)}
                </ul>
            </nav>
        </header>
    )
}

export default Nav