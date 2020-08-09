import React, { useState, useContext, useEffect } from 'react'
import { MovieContext } from './movieContext'
import Axios from 'axios'

const MovieForm = () => {
    const [movie,setMovie] = useContext(MovieContext)
    const [input, setInput]  =  
    useState({
        id:0,
        title:"",
        description:"",
        year:1990,
        duration:0,
        genre:"",
        rating:1
    })
    const [selectedId, setSelectedId]  =  useState(0)
    const [statusForm, setStatusForm]  =  useState("create")

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
    
    const handleDelete = (event) => {
        let idMovie = parseInt(event.target.value)
    
        let newMovie = movie.filter(el => el.id !== idMovie)
    
        Axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idMovie}`)
        .then(res => {
          console.log(res)
        })
              
        setMovie([...newMovie])
        
    }
    
    const handleEdit = (event) =>{
        let idMovie = parseInt(event.target.value)
        let dataMovie = movie.find(x=> x.id === idMovie)
        setInput({
            id:dataMovie.id,
            title:dataMovie.title,
            description:dataMovie.description,
            year:dataMovie.year,
            duration:dataMovie.duration,
            genre:dataMovie.genre,
            rating:dataMovie.rating
        })
        setSelectedId(idMovie)
        setStatusForm("edit")
    }
    
    const handleChange = (event) =>{
        let typeOfInput = event.target.id
    
        switch (typeOfInput){
          case "title":
          {
            setInput({...input, title: event.target.value});
            break
          }
          case "description":
          {
            setInput({...input, description: event.target.value});
            break
          }
          case "year":
          {
            setInput({...input, year: event.target.value});
              break
          }
          case "duration":
          {
            setInput({...input, duration: event.target.value});
            break
          }
          case "genre":
          {
            setInput({...input, genre: event.target.value});
            break
          }
          case "rating":
          {
            setInput({...input, rating: event.target.value});
              break
          }
        default:
          {break;}
        }
    }

    const handleSubmit = (event) =>{
        // menahan submit
        event.preventDefault()
          
        if (statusForm === "create"){        
            Axios.post(`http://backendexample.sanbercloud.com/api/movies`, {
                title:input.title,
                description:input.description,
                year:input.year,
                duration:input.duration,
                genre:input.genre,
                rating:input.rating})
            .then(res => {
                setMovie([
                  ...movie, 
                  { id: res.data.id, 
                    title:input.title,
                    description:input.description,
                    year:input.year,
                    duration:input.duration,
                    genre:input.genre,
                    rating:input.rating
                  }])
            })
        }else if(statusForm === "edit"){
            Axios.put(`http://backendexample.sanbercloud.com/api/movies/${selectedId}`, {
                title:input.title,
                description:input.description,
                year:input.year,
                duration:input.duration,
                genre:input.genre,
                rating:input.rating})
            .then(() => {
                let dataMovie = movie.find(el=> el.id === selectedId)
                dataMovie.title = input.title
                dataMovie.description= input.description
                dataMovie.year= input.year
                dataMovie.duration=input.duration
                dataMovie.genre=input.genre
                dataMovie.rating=input.rating
                setMovie([...movie])
            })
        }
          
          setStatusForm("create")
          setSelectedId(0)
          setInput({
            title:"",
            description:"",
            year:1990,
            duration:0,
            genre:"",
            rating:1
          })
        
    
    }
    
    

    return (
        <>
            <section>
                <h1>Movie List</h1>
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
                                    <td><button value={el.id} onClick={handleEdit}>ubah</button><button onClick={handleDelete} value={el.id}>hapus</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Form Movie</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>
                        <b>Judul</b> <input id='title' type='text' value={input.title} onChange={handleChange} required/>
                    </label>
                    <label htmlFor='year'>
                        <b>Tahun</b> <input id='year' type='number' value={input.year} onChange={handleChange} required/>
                    </label>
                    <label htmlFor='duration'>
                        <b>Durasi (menit)</b> <input id='duration' value={input.duration} type='number' onChange={handleChange} required/>
                    </label>
                    <label htmlFor='genre'>
                        <b>Genre</b> <input id='genre' type='text' value={input.genre} onChange={handleChange} required/>
                    </label>
                    <label htmlFor='rating'>
                        <b>Rating (1-10)</b> <input id='rating' value={input.rating} type='range' min='1' max='10' onChange={handleChange} required/>
                    </label>
                    <label htmlFor='description'>
                        <b>Deskripsi</b> <textarea id='description' value={input.description} type='text' rows='5' onChange={handleChange} required/>
                    </label>
                    <input type="submit" value="kirim" />

                </form>
            </section>
        </>
    )
}

export default MovieForm