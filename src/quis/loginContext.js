import React, { createContext, useState } from 'react'

export const LoginContext = createContext()

export const LoginProvider = props => {
    const [login, setLogin] = useState('logout');
    return (
        <LoginContext.Provider value={[login, setLogin]}>
            {props.children}
        </LoginContext.Provider>
    )
}