
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import MovieCard from './MovieCard'

const apiKey =`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY }`
const filKey=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY }&query=`

const Main=()=>{


const [searchTerm,setSearchTerm] =useState('')
const [movies, setMovies] =useState([])
const [loading,setLoading]= useState(false)


const getMovies =(API)=>{
    setLoading(true)
    axios.get(API)
    .then((res)=>
    {
        setMovies(res.data.results)
        setLoading(false)
       
    })
    .catch((err)=>{
        console.log(err)
        setLoading(false)
    })
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
           {
               loading ? <Loading/> :
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
           }
        
        
       </React.Fragment>
    )
}
export default Main;