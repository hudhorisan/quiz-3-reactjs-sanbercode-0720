import React, { useEffect, useContext } from 'react'
import { MovieContext } from './movieContext'
import Axios from 'axios'


const MovieTable = () => {
    const [movie,setMovie] = useContext(MovieContext)
    useEffect(()=>{
        if(movie === null){
            Axios.get(`http://backendexample.sanbercloud.com/api/movies`)
                .then((res)=>{
                    setMovie(res.data.map((el)=>{
                        return {
                            id:el.id,
                            title:el.title,
                            description:el.description,
                            year:el.year,
                            duration:el.duration,
                            genre:el.genre,
                            rating:el.rating
                        }
                    }))
                })
        }
    })
    return(
        <section>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Tahun Rilis</th>
                        <th>Durasi</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Diskripsi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {movie !== null && movie.map((el,index)=>{
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{el.title}</td>
                                <td>{el.year}</td>
                                <td>{el.duration}</td>
                                <td>{el.genre}</td>
                                <td>{el.rating}</td>
                                <td>{el.description}</td>
                                <td><button>ubah</button><button>hapus</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default MovieTable