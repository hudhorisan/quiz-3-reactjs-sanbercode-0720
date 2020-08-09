import React from 'react'
import './public/css/style.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Nav from './nav'
import About from './about'
import MovieList from './movieList'
import Login from './login'
import Home from './home'
import { LoginProvider } from './loginContext'


const Index = () => {
    return (
        <LoginProvider>
            <body>
                <main>
                <BrowserRouter>                
                    <Nav />                
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/about">
                            <About />
                        </Route>

                        <Route path="/movie-list-editor">
                            <MovieList />
                        </Route>

                        <Route path="/login">                            
                            <Login />                                                
                        </Route>
                    </Switch>
                </BrowserRouter>
                </main>
                <footer>
                    <h5>copyright &copy; 2020 by Sanbercode</h5>
                </footer>
            </body>
        </LoginProvider>
    )
}

export default Index