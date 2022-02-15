
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const apiKey ='https://api.themoviedb.org/3/discover/movie?api_key=d134bd074dccd874d554100e00e65278'
const filKey='https://api.themoviedb.org/3/search/movie?api_key=d134bd074dccd874d554100e00e65278&query='

const Main=()=>{


const [searchTerm,setSearchTerm] =useState('')
const [movies, setMovies] =useState([])



const getMovies =(API)=>{
    axios.get(API)
    .then((res)=>setMovies(res.data.results))
    .catch((err)=>console.log(err))
}
useEffect(()=>{
    getMovies(apiKey)
},[])

const handleSubmit =(e)=>{
    e.preventDefault();
    getMovies(filKey + searchTerm)
    setSearchTerm('')
    

}


    return(
       <React.Fragment>
           <form className='search' onSubmit={handleSubmit}>
               <input
               type='search'
               placeholder='search a movie'
               className='search-input'
               value={searchTerm}
               onChange={(e)=>setSearchTerm(e.target.value)}
               />
               <input
               type='submit'
               value='Search'
               className='btn btn-outline-dark'
               />
           </form>
        <div className='movie-container'>
        {
            movies.map((movie)=>{
                return <MovieCard
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                overview={movie.overiew}
                vote_average={movie.vote_average}
                />
            })
            
               
            
        }
        </div>
        
       </React.Fragment>
    )
}
export default Main;