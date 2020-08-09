import React from 'react'
import { MovieProvider } from './movieContext'
import MovieForm from './movieForm'

const MovieList = () => {
    return (
        <section>
            <MovieProvider>
                <MovieForm />
            </MovieProvider>
        </section>
    )
}

export default MovieList