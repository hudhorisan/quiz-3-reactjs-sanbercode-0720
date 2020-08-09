import React, { useContext } from 'react'
import { LoginContext } from './loginContext'
import { Link } from 'react-router-dom'

const Login = () => {
    const [login,setLogin] = useContext(LoginContext)
    const handleClick = (event) => {
        event.target.value === 'login' ? setLogin('logout') : setLogin('login')
    }
    return (
        <section>
            <h1>Log In</h1>
            <form>
                <label htmlFor='nama'>
                    <b>Username</b><input type="text" required />
                </label>
                <label htmlFor='pass'>
                    <b>Pass</b><input type="password" required/>
                </label>
            </form>
            <Link to="/"  onClick={handleClick} value={login}><button>login</button></Link>
            {console.log(login)}
        </section>
    )
}

export default Login