import React from 'react'
import CardTitle from '../atoms/CardTitle'
import MovieRunTime from '../atoms/MovieRunTime'
import MovieRating from '../atoms/MovieRating'
import MovieReleaseYear from '../atoms/MovieReleaseYear'

const MovieDetailCardBody = ({movie}) => {
    return (
        <div className="card-body bg-light">
            <CardTitle title={movie.Title}/><br/>
            <div className='card-text row'>
                <MovieRunTime runtime={movie.Runtime}/>
                <MovieReleaseYear year={movie.Year}/>
                <MovieRating rating={movie.imdbRating}/>
            </div>
        </div>
    )
};

export default MovieDetailCardBody