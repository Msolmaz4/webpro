import React from 'react'


const IMG_API ='https://image.tmdb.org/t/p/w1280'
const setVoteClass =(farbe)=>{
    if(farbe>=8){
        return 'green'
    }
    else if(farbe>=6){
        return 'orange'
    }else{
        return 'red'
    }
        
    }

function MovieCard({title,overview,poster_path,vote_average}) {
  return (
    <div className='movie'>
        <img src={IMG_API + poster_path} alt=''></img>
        <div className='movie-info'> 
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
        <div className='movie-over'>
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>



    </div>
  )
}

export default MovieCard