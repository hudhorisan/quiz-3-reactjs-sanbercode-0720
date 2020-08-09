import React from 'react'
import Axios from 'axios'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie:null
        }
    }
    componentDidMount() {
        console.log('jalan')
        if(this.state.movie === null){
            console.log('jalan')
            Axios.get(`http://backendexample.sanbercloud.com/api/movies`)
                .then((res)=>{
                    this.setState({
                        movie:res.data.map((el)=>{
                            return {
                                id:el.id,
                                title:el.title,
                                description:el.description,
                                year:el.year,
                                duration:el.duration,
                                genre:el.genre,
                                rating:el.rating
                            }
                        })
                    })
                })}
    }

    render() {
        
    return (
        <section>
            <h1>Daftar Film Film Terbaik</h1>
            {this.state.movie !== null && 
            this.state.movie
            .sort((a,b)=>{
                const ratingA = a.rating
                const ratingb = b.rating

                let perbandingan = 0
                if(ratingA>ratingb){
                    perbandingan = -1
                } else if(ratingb>ratingA){
                    perbandingan = 1
                }
                return perbandingan
            })
            .map((el)=>{
                return(
                    <article>
                        <h3>{el.title}</h3>
                        <ul>
                            <li>{el.rating}</li>
                            <li>{el.duration}</li>
                            <li>{el.genre}</li>
                            <li>{el.year}</li>
                        </ul>
                        <br/>
                        <p>{el.description}</p>
                    </article>
                )
            })}
            
        </section>
    )
       
    }
}

export default Home


